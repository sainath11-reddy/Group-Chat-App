// const { CostExplorer } = require("aws-sdk");

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
    let lastPageId;
    let mergemsgs=[];
    // setInterval(()=>{
        let oldMessages = JSON.parse(localStorage.getItem('oldMessages'));
        if(oldMessages == null){
            lastPageId = 0;
        }
        else{
            console.log(oldMessages)
            lastPageId = oldMessages[oldMessages.length - 1].messageId;
        }
        axios.get(`http://localhost:3000/message?lastPageId=${lastPageId}`, {
        headers:{"Authorization":localStorage.getItem("token")}})
        .then(newMessages =>{
            
            console.log(lastPageId);
            if(newMessages.data.length>0){
                if(oldMessages){
                    // console.log(oldMessages, JSON.stringify(newMessages.data))
                    mergemsgs = oldMessages.concat(newMessages.data);
                    
            }
            else{
                mergemsgs = newMessages.data;
            }
            if (mergemsgs.length > 10) {
                let remove = mergemsgs.length - 10;
                for (let i = 0; i < remove; i++) {
                  mergemsgs.shift();
                }
              }
        }
        else{
            mergemsgs=JSON.parse(localStorage.getItem("oldMessages"));
        }
            
            localStorage.setItem('oldMessages',JSON.stringify(mergemsgs));
            let list='';
            for(let i of Object.values(mergemsgs)){
                list += `<li>${i.userName}: ${i.message} </li>`
            }
            ul.innerHTML += list;
        })
        .catch(err => console.log(err))
    // },1000)
    
})