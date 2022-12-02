

const body = document.querySelector('body');
const form = document.querySelector('form');
const textBox = document.querySelector('form input');
const ul = document.getElementById('message_list');
form.addEventListener('submit', (e)=>{
    e.preventDefault();
    axios.post('http://localhost:3000/message',
    {
        message:form.message.value
    },{
        headers:{"Authorization":localStorage.getItem("token")}
    }).then(response =>{
        console.log(response);
        textBox.value='';
        
    }).catch(err => console.log(err))
})

document.addEventListener('DOMContentLoaded',(e)=>{
    e.preventDefault();
    setInterval(()=>{
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
    },1000)
    
})