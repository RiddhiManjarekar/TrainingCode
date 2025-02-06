document.addEventListener("DOMContentLoaded", () => {
    const inputTodo = document.getElementById("input-todo");
    const buttonTodo = document.getElementById("button-todo");
    const ulTodo = document.getElementById("ul-todo");
  
     //GET method
    const fetchTodos = () => {
      axios.get('https://jsonplaceholder.typicode.com/todos?_limit=5')
        .then(response => {
          const todos = response.data;
          todos.forEach(todo => {
            createTodo(todo);
          });
          console.log("Todos fetched:", todos);
        })
        .catch(error => {
          console.error("Error fetching todos:", error);
        });
    };
  
  
    const createTodo = (todo) => {
      const li = document.createElement("li");
      li.className = "list-group-item d-flex justify-content-between align-items-start";
      li.dataset.id = todo.id; 
      li.innerHTML = `
        <div class="todo-info">
          <p><strong>ID:</strong> ${todo.id}</p>
          <p><strong>Title:</strong> <span class="text-todo">${todo.title}</span></p>
          <p><strong>Completed:</strong> ${todo.completed ? 'Yes' : 'No'}</p>
        </div>
        <div class="btn-group">
          <button type="button" class="btn btn-warning edit-btn">Edit</button>
          <button type="button" class="btn btn-danger delete-btn">Delete</button>
        </div>`;
      ulTodo.appendChild(li);
    };
  
  
    ulTodo.addEventListener("click", (e) => {
      const li = e.target.closest(".list-group-item");
  
      // Editing inline
      if (e.target.classList.contains("edit-btn")) {
        const span = li.querySelector(".text-todo");
        const input = document.createElement("input");
        input.type = "text";
        input.value = span.textContent;
        input.className = "form-control";
  
        li.replaceChild(input, span);
        input.focus();
  
        const saveEdit = () => {
          const newText = input.value.trim();
          if (newText) {
            span.textContent = newText;
            li.replaceChild(span, input);
  
          
            axios.put(`https://jsonplaceholder.typicode.com/todos/${li.dataset.id}`, {
              title: newText,
              completed: false
            })
              .then(response => {
                console.log("Todo updated:", response.data);
              })
              .catch(error => {
                console.error("Error updating todo:", error);
              });
          } else {
            li.remove();
          }
        };
  
        input.addEventListener("blur", saveEdit);
        input.addEventListener("keydown", (event) => {
          if (event.key === "Enter") saveEdit();
        });
      }
  
      // Deleting individual todo
      if (e.target.classList.contains("delete-btn")) {
      
        axios.delete(`https://jsonplaceholder.typicode.com/todos/${li.dataset.id}`)
          .then(response => {
            console.log("Todo deleted:", response.data);
            li.remove(); 
          })
          .catch(error => {
            console.error("Error deleting todo:", error);
          });
      }
    });
  
    //  POST method
    buttonTodo.addEventListener("click", () => {
      const text = inputTodo.value.trim();
      if (text !== "") {
               axios.post('https://jsonplaceholder.typicode.com/todos', {
          title: text,
          completed: false
        })
          .then(response => {
            console.log("Todo added:", response.data);
            createTodo(response.data); 
            inputTodo.value = ""; 
          })
          .catch(error => {
            console.error("Error adding todo:", error);
          });
      }
    });
  
    fetchTodos();
  });
  