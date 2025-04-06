let todolist=JSON.parse(localStorage.getItem('todotask')) ||[
    {
        item: "",
        duedate: " ",
    },
    
];
displayItem();

function addTodo(){
    let inputitem=document.querySelector('#input');
    let inputdate=document.querySelector('#todo-date');
    let todoitem=inputitem.value;
    let tododate=inputdate.value;
    todolist.push({item: todoitem , duedate:tododate});
    inputitem.value='';
    inputdate.value='';
    displayItem();
}
function displayItem(){
    localStorage.setItem('todotask', JSON.stringify(todolist));
    let containerElement= document.querySelector('.todo-container');
    let newhtml='';
    for( let i =0;i<todolist.length;i++)
    {
        let item = todolist[i].item;
        let date=todolist[i].duedate;
        newhtml +=`
        <span> ${item}</span>
        <span>${date}</span>
        <button class="del-btn" onclick="todolist.splice(${i}, 1); displayItem();">Delete</button>
       `
    }
    containerElement.innerHTML=newhtml;
}