var _a, _b, _c;
// Categories Enum
var Categories;
(function (Categories) {
    Categories["All"] = "All";
    Categories["Food"] = "Food";
    Categories["Travel"] = "Travel";
    Categories["Bills"] = "Bills";
    Categories["Shopping"] = "Shopping";
    Categories["Other"] = "Other";
})(Categories || (Categories = {}));
// Utility: Get stored expenses
var getExpenses = function () {
    return JSON.parse(localStorage.getItem("expenses") || "[]");
};
// Utility: Save expenses
var saveExpenses = function (expenses) {
    localStorage.setItem("expenses", JSON.stringify(expenses));
};
// Handle Dashboard Display
if (window.location.pathname.indexOf("dashboard.html") !== -1) {
    var categoryDropdown_1 = document.getElementById("categoriesDropdown");
    // Populate categories dropdown (default: "All")
    Object.keys(Categories).forEach(function (key) {
        var category = Categories[key];
        var option = document.createElement("option");
        option.value = category;
        option.textContent = category;
        categoryDropdown_1.appendChild(option);
    });
    // Display expenses
    var displayExpenses_1 = function (selectedCategory) {
        var expenses = getExpenses();
        var expenseList = document.getElementById("expenseList");
        expenseList.innerHTML = ""; // Clear list before updating
        var filteredExpenses = selectedCategory === "All" ? expenses : expenses.filter(function (exp) { return exp.category === selectedCategory; });
        if (filteredExpenses.length === 0) {
            expenseList.innerHTML = "<li>No expenses found.</li>";
            return;
        }
        filteredExpenses.forEach(function (expense) {
            var li = document.createElement("li");
            li.textContent = "".concat(expense.date, " - ").concat(expense.category, ": \u20B9").concat(expense.amount, " - ").concat(expense.description);
            expenseList.appendChild(li);
        });
    };
    // Initial display (All categories)
    displayExpenses_1("All");
    // Filter expenses when category is changed
    categoryDropdown_1.addEventListener("change", function () {
        displayExpenses_1(categoryDropdown_1.value);
    });
    // Open Expense Modal
    (_a = document.getElementById("addExpenseBtn")) === null || _a === void 0 ? void 0 : _a.addEventListener("click", function () {
        document.getElementById("expenseModal").style.display = "block";
    });
    // Close Expense Modal
    (_b = document.getElementById("closeModal")) === null || _b === void 0 ? void 0 : _b.addEventListener("click", function () {
        document.getElementById("expenseModal").style.display = "none";
    });
    // Save Expense
    (_c = document.getElementById("saveExpense")) === null || _c === void 0 ? void 0 : _c.addEventListener("click", function () {
        var amount = parseFloat(document.getElementById("expenseAmount").value);
        var category = document.getElementById("expenseCategory").value;
        var date = document.getElementById("expenseDate").value;
        var description = document.getElementById("expenseDescription").value;
        if (!amount || !date || !description) {
            alert("All fields are required.");
            return;
        }
        var expenses = getExpenses();
        expenses.push({ amount: amount, category: category, date: date, description: description });
        saveExpenses(expenses);
        alert("Expense Added!");
        document.getElementById("expenseModal").style.display = "none";
        // Refresh expense list
        displayExpenses_1(categoryDropdown_1.value);
    });
}
