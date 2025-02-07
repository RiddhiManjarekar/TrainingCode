const fetchData=()=>{
    fetch('https://jsonplaceholder.typicode.com/users?_limit=5')
    .then(res=>res.json())
    .then(data=>{
        const usernames=data.map(user=>user.username)
        console.log(usernames)
    })
    .catch(err=>console.log(err.message))
}
//fetchData();

setTimeout(fetchData,2000);