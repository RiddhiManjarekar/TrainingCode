document.addEventListener("DOMContentLoaded", () => {
  const ulTodo = document.getElementById("ul-todo");
  const inputTodo = document.getElementById("input-todo");
  const buttonTodo = document.getElementById("button-todo");
  const deleteAllButton = document.getElementById("delete-all");

  //Creating todo
  const createTodoElement = (id, title) => {
      const li = document.createElement("li");
      li.className = "list-group-item d-flex justify-content-between align-items-center";
      li.dataset.id = id;
      li.innerHTML = `
          <span class="text-todo">${title}</span>
          <div class="btn-group">
              <button class="btn btn-warning edit-btn">Edit</button>
              <button class="btn btn-danger delete-btn">Delete</button>
          </div>
      `;
      ulTodo.appendChild(li);
  };

  // Fetching  first 10 todos only
  axios.get("https://jsonplaceholder.typicode.com/todos?_limit=10")
      .then(response => {
          response.data.forEach(todo => {
              createTodoElement(todo.id, todo.title);
          });
          console.log("Todos fetched:", response.data);
      })
      .catch(error => console.error("Error fetching todos:", error));

  // Adding new todo (POST method)
  buttonTodo.addEventListener("click", () => {
      const title = inputTodo.value.trim();
      if (!title) return alert("Enter a valid todo!");

      axios.post("https://jsonplaceholder.typicode.com/todos", { title, completed: false })
          .then(response => {
              createTodoElement(response.data.id, response.data.title);
              console.log("Todo added:", response.data);
              inputTodo.value = "";
          })
          .catch(error => console.error("Error adding todo:", error));
  });

  
  ulTodo.addEventListener("click", (e) => {
      const li = e.target.closest(".list-group-item");
      if (!li) return;

      // Editing (PUT method)
      if (e.target.classList.contains("edit-btn")) {
          const span = li.querySelector(".text-todo");
          if (!span) return;

          const input = document.createElement("input");
          input.type = "text";
          input.value = span.textContent;
          input.className = "form-control";
          span.replaceWith(input);
          input.focus();

          const saveEdit = () => {
              if (!input.parentElement) return; 

              const newText = input.value.trim();
              if (newText) {
                  const newSpan = document.createElement("span");
                  newSpan.className = "text-todo";
                  newSpan.textContent = newText;
                  input.replaceWith(newSpan);

                  // Update todo via PUT
                  axios.put(`https://jsonplaceholder.typicode.com/todos/${li.dataset.id}`, { title: newText, completed: false })
                      .then(response => console.log("Todo updated:", response.data))
                      .catch(error => console.error("Error updating todo:", error));
              } else {
                  li.remove();
              }
          };

          input.addEventListener("blur", saveEdit, { once: true });
          input.addEventListener("keydown", (event) => {
              if (event.key === "Enter") saveEdit();
          }, { once: true });
      }

      // Deleting single todo 
      if (e.target.classList.contains("delete-btn")) {
          axios.delete(`https://jsonplaceholder.typicode.com/todos/${li.dataset.id}`)
              .then(() => {
                  console.log("Todo deleted:", li.dataset.id);
                  li.remove();
              })
              .catch(error => console.error("Error deleting todo:", error));
      }
  });

  // Deleting all todos
  deleteAllButton.addEventListener("click", () => {
      const allTodos = document.querySelectorAll("#ul-todo .list-group-item");
      if (allTodos.length === 0) return alert("No todos to delete!");

      const deleteRequests = Array.from(allTodos).map(li =>
          axios.delete(`https://jsonplaceholder.typicode.com/todos/${li.dataset.id}`)
      );

      axios.all(deleteRequests)
          .then(() => {
              ulTodo.innerHTML = ""; 
              console.log("All todos deleted!");
          })
          .catch(error => console.error("Error deleting all todos:", error));
  });
});
