//seletors
const todoinput=document.querySelector(".submit-input");
const todobutton=document.querySelector(".submit-btn");
const todoitems=document.querySelector(".todo-items");
const filtertodo=document.querySelector(".filter-todo");

//event listeners
todobutton.addEventListener('click',addTodo);
todoitems.addEventListener('click',checkStatus);
filtertodo.addEventListener('click',filterTodo);
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

function filterTodo(e){
    //console.log(e.target.value);
    const option=e.target.value;
    const items=todoitems.childNodes;
    console.log(items);
    if(option==='all'){
        items.forEach(function(item){
            item.style.display="flex"; //because switch back from other options,need to restore the display property
          });
        
    }
    else if(option==='completed'){
      items.forEach(function(item){
          if(item.classList.contains('complete')){
            item.style.display="flex";//need to restore display
          }else if(!item.classList.contains('complete')){
              item.style.display="none";
          }
        });
    }
    else if(option==='uncompleted'){
        items.forEach(function(item){
            if(item.classList.contains('complete')){
                item.style.display="none";
            }else if(!item.classList.contains('complete')){
                item.style.display="flex";
            }
          });
    }
}