const body = document.querySelector('body');
const form = document.querySelector('form');

form.addEventListener('submit', (e)=>{
    e.preventDefault();
    axios.post('http://localhost:3000/message',{
        message:form.message.value
    },{headers:{"Authorization":localStorage.getItem("token")}}).then(succ =>{
        console.log(done);
    })
})