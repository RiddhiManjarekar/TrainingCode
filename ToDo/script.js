document.addEventListener("DOMContentLoaded", () => {
    const inputTodo = document.getElementById("input-todo");
    const buttonTodo = document.getElementById("button-todo");
    const ulTodo = document.getElementById("ul-todo");
  
    // Create and add Delete All button
    const deleteAllButton = document.createElement("button");
    deleteAllButton.textContent = "Delete All";
    deleteAllButton.className = "btn btn-danger w-100 mt-3";
    document.querySelector(".container").appendChild(deleteAllButton);
  
    buttonTodo.addEventListener("click", () => {
      const text = inputTodo.value.trim();
      if (text !== "") {
        createTodo(text);
        inputTodo.value = "";
        saveAllTodo();
      }
    });
  
    const createTodo = (task) => {
      if (!task) return; 
  
      const li = document.createElement("li");
      li.className =
        "list-group-item d-flex justify-content-between align-items-start";
      li.innerHTML = `<span class="text-todo">${task}</span>
      <div class="btn-group">
        <button type="button" class="btn btn-danger edit-btn">Edit</button>
        <button type="button" class="btn btn-warning delete-btn">Delete</button>
      </div>`;
      
      ulTodo.appendChild(li); 
      saveAllTodo(); 
    };
  
    ulTodo.addEventListener("click", (e) => {
      const li = e.target.closest(".list-group-item");
  
      // Deleting individual item
      if (e.target.classList.contains("delete-btn")) {
        li.remove();
        saveAllTodo();
      }
  
      //Editing inline
      if (e.target.classList.contains("edit-btn")) {
        const span = li.querySelector(".text-todo");
        const input = document.createElement("input");
        input.type = "text";
        input.value = span.textContent;
        input.className = "form-control";
  
        li.replaceChild(input, span);
        input.focus();
  
        // Saving edits by Enter key or Blur
        const saveEdit = () => {
          const newText = input.value.trim();
          if (newText) {
            span.textContent = newText;
            li.replaceChild(span, input);
            saveAllTodo();
          } else {
            li.remove(); 
            saveAllTodo();
          }
        };
  
        input.addEventListener("blur", saveEdit);
        input.addEventListener("keydown", (event) => {
          if (event.key === "Enter") saveEdit();
        });
      }
    });
  
    //Giving alert message
    deleteAllButton.addEventListener("click", () => {
      if (confirm("Are you sure you want to delete all items?")) {
        ulTodo.innerHTML = "";
        localStorage.removeItem("allTodos");
      }
    });
  
    const saveAllTodo = () => {
      const allTodos = [...document.querySelectorAll(".text-todo")].map(
        (task) => task.textContent
      );
      localStorage.setItem("allTodos", JSON.stringify(allTodos));
    };
  
    const loadAllTodo = () => {
      const allTodos = JSON.parse(localStorage.getItem("allTodos")) || [];
      allTodos.forEach((task) => createTodo(task));
    };
  
    loadAllTodo();
  });
  
 