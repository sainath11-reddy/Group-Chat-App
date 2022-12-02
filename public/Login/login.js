const form=document.querySelector('form');
const p = document.getElementById('Status');
form.addEventListener('submit',(e)=>{
    e.preventDefault();
    axios.post('http://localhost:3000/users/login',{
        email:form.email.value,
        password:form.password.value
    }).then(response => {
        if(response.status === 200){
            p.innerHTML='';
            
            localStorage.setItem('token',response.data.token);
            alert("You have logged in successfully");
            window.location.href = '../Chat App/index.html'
        }
    }).catch(err =>{
        console.log(err.response);
        if(err.response.status === 401){
            p.innerHTML = 'Password is incorrect';
        }
        else if(err.response.status === 500){
            p.innerHTML = 'Check your Credentials';
        }
        else if(err.response.status === 404){
            p.innerHTML = 'User does not exist';
        }
    })
})