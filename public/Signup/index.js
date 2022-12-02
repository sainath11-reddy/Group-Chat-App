const form = document.querySelector('form');
form.addEventListener('submit',(e)=>{
    e.preventDefault();
    console.log(form.password.value);
    axios.post('http://localhost:3000/users/signup',{
        "name":form.name.value,
        "email":form.email.value,
        "password":form.password.value,
        "phoneNumber":form.number.value
    }).then(response =>{
        if(response.status === 200){
            alert("Signup Successful");
            window.location.href = '../Login/login.html'
        }
        console.log(response);
        
    }).catch(err => {
        if(err.response.status === 409){
            alert("User already exists");
        }
    });
})