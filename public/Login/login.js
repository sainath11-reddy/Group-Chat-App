const form=document.querySelector('form');

form.addEventListener('submit',(e)=>{
    e.preventDefault();
    axios.post('http://localhost:3000/users/signup',{
        email:form.email,
        password:form.password
    }).then(respone => {

    }).catch(err =>{
        
    })
})