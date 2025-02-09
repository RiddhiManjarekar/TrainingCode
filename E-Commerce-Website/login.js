document.getElementById('loginForm').addEventListener('submit', function(e) {
    e.preventDefault();
  
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
  
    
    axios.post('https://fakestoreapi.com/auth/login', { username, password })
      .then(response => {
        if (response.status === 200) {
          localStorage.setItem('username', username);
          window.location.href = 'dashboard.html';
        }
      })
      .catch(error => {
        document.getElementById('loginMessage').innerText = 'Invalid username or password';
      });
  });
  