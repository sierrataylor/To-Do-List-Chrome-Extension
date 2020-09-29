//form DOM selectors
document.querySelector('form').addEventListener('submit', submit);
//event handler
function submit(e){
    e.preventDefault();
    let input = document.querySelector('input');
    if(input.value != ''){
        addTodo(input.value);
    }
    input.value = '';
}
//function to add a todo to the list
function addTodo(todo){
    let ul = document.querySelector('ul');
    let li = document.createElement('li');
    li.innerHTML = `<span class="todo">${todo}</span>
                    <button name="checkButton"<i class="fas fa-check-square fa-lg"></i></button>
                    <button name="deleteButton"><i class="fas fa-trash fa-lg"></i></button>`;
    li.classList.add('todo-item');
    ul.appendChild(li);
}
//ul DOM selector
document.querySelector('ul').addEventListener('click', clickDeleteOrCheck);
//function to check or delete todos
function clickDeleteOrCheck(e){
    if(e.target.name=='checkButton'){
        checkTodo(e);
    }
    if(e.target.name=='deleteButton'){
        deleteTodo(e);
    }
}
//check a todo
function checkTodo(e) {
    let item = e.target.parentNode;
    if (item.style.textDecoration == 'line-through'){
        item.style.textDecoration = 'none';
    }else{
        item.style.textDecoration = 'line-through';
    }
}
//delete an individual todo
function deleteTodo(e) {
    let item = e.target.parentNode;
    
    item.addEventListener('transitionend', function () {
        item.remove(); 
    });

    item.classList.add('todo-item-fall');
}
//clear DOM selector
document.getElementById('clearAll').addEventListener('click', clearAll)
//function to clear whole list
function clearAll(e){
    document.querySelector('ul').innerHTML = '';
}
//Done!