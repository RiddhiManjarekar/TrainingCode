
enum Categories {
    All = "All",
    Food = "Food",
    Travel = "Travel",
    Bills = "Bills",
    Shopping = "Shopping",
    Other = "Other"
}


interface Expense {
    amount: number;
    category: Categories;
    date: string;
    description: string;
}


const getExpenses = (): Expense[] => {
    return JSON.parse(localStorage.getItem("expenses") || "[]");
};


const saveExpenses = (expenses: Expense[]) => {
    localStorage.setItem("expenses", JSON.stringify(expenses));
};


if (window.location.pathname.indexOf("dashboard.html") !== -1) {
    const categoryDropdown = document.getElementById("categoriesDropdown") as HTMLSelectElement;

    
    Object.keys(Categories).forEach((key) => {
        const category = Categories[key as keyof typeof Categories];
        const option = document.createElement("option");
        option.value = category;
        option.textContent = category;
        categoryDropdown.appendChild(option);
    });

    
    const displayExpenses = (selectedCategory: string) => {
        const expenses = getExpenses();
        const expenseList = document.getElementById("expenseList") as HTMLUListElement;
        expenseList.innerHTML = ""; 

        const filteredExpenses = selectedCategory === "All" ? expenses : expenses.filter(exp => exp.category === selectedCategory);

        if (filteredExpenses.length === 0) {
            expenseList.innerHTML = "<li>No expenses found.</li>";
            return;
        }

        filteredExpenses.forEach(expense => {
            const li = document.createElement("li");
            li.textContent = `${expense.date} - ${expense.category}: ₹${expense.amount} - ${expense.description}`;
            expenseList.appendChild(li);
        });
    };

    displayExpenses("All");

    
    categoryDropdown.addEventListener("change", () => {
        displayExpenses(categoryDropdown.value);
    });


    document.getElementById("addExpenseBtn")?.addEventListener("click", () => {
        document.getElementById("expenseModal")!.style.display = "block";
    });

    
    document.getElementById("closeModal")?.addEventListener("click", () => {
        document.getElementById("expenseModal")!.style.display = "none";
    });


    document.getElementById("saveExpense")?.addEventListener("click", () => {
        const amount = parseFloat((document.getElementById("expenseAmount") as HTMLInputElement).value);
        const category = (document.getElementById("expenseCategory") as HTMLSelectElement).value as Categories;
        const date = (document.getElementById("expenseDate") as HTMLInputElement).value;
        const description = (document.getElementById("expenseDescription") as HTMLInputElement).value;

        if (!amount || !date || !description) {
            alert("All fields are required.");
            return;
        }

        const expenses = getExpenses();
        expenses.push({ amount, category, date, description });
        saveExpenses(expenses);

        alert("Expense Added!");
        document.getElementById("expenseModal")!.style.display = "none";

        
        displayExpenses(categoryDropdown.value);
    });
}
