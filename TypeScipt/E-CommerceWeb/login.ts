document.getElementById('loginForm')?.addEventListener('submit', function (e: Event) {
    e.preventDefault();
  
    const username = (document.getElementById('username') as HTMLInputElement).value;
    const password = (document.getElementById('password') as HTMLInputElement).value;
  
    axios.post<{ token: string }>('https://fakestoreapi.com/auth/login', { username, password })
      .then(response => {
        if (response.status === 200) {
          localStorage.setItem('username', username);
          window.location.href = 'dashboard.html';
        }
      })
      .catch(() => {
        (document.getElementById('loginMessage') as HTMLElement).innerText = 'Invalid username or password';
      });
  });
  