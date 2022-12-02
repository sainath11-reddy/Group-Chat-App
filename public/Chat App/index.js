const body = document.querySelector('body');
const form = document.querySelector('form');
const ul = document.getElementById('message_list');
form.addEventListener('submit', (e)=>{
    
    axios.post('http://localhost:3000/message',{
        message:form.message.value
    },{headers:{"Authorization":localStorage.getItem("token")}}).then(succ =>{
        console.log('done');
        e.preventDefault();
    })
})

document.addEventListener('DOMContentLoaded',(e)=>{
    e.preventDefault();
    axios.get('http://localhost:3000/message', {
        headers:{"Authorization":localStorage.getItem("token")}})
        .then(succ =>{
            let list='';
            for(let i of succ.data){
                list += `<li>${i.userName}: ${i.message} </li>`
            }
            ul.innerHTML = list;
        })
        .catch(err => console.log(err))
})