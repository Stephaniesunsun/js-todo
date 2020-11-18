//seletors
const todoinput=document.querySelector(".submit-input");
const todobutton=document.querySelector(".submit-btn");
const todoitems=document.querySelector(".todo-items");
//event listeners
todobutton.addEventListener('click',addTodo);
todoitems.addEventListener('click',checkStatus);
//functions

function addTodo(event){
    event.preventDefault();
    //console.log(event.target);
    const tododiv=document.createElement("div");
    tododiv.classList.add('todo-item');

    const todoli=document.createElement("li");
    todoli.classList.add('todo-text');
    todoli.innerText=todoinput.value;
    tododiv.appendChild(todoli);

    const completebutton=document.createElement('button');
    completebutton.innerHTML='<i class="fas fa-check"></i>';
    completebutton.classList.add('todo-complete');
    tododiv.appendChild(completebutton);

    const trashbutton=document.createElement('button');
    trashbutton.innerHTML='<i class="fas fa-trash-alt"></i>';
    trashbutton.classList.add('todo-trash');
    tododiv.appendChild(trashbutton);

    todoitems.appendChild(tododiv);
    todoinput.value="";
}


function checkStatus(e){
    //console.log(e.target.classList);
    const status=e.target.classList[0];
    const parent=e.target.parentElement;
    if (status==='todo-trash'){
        parent.classList.add('trashed');
        parent.addEventListener("transitionend",()=>{
            parent.remove();
        });
        
    }else if(status==='todo-complete'){
        parent.classList.add('complete');
        
    }
}