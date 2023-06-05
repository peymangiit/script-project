const addBtn = document.getElementById('addbtn')
const subBtn = document.getElementById('subbtn')
const inputForm = document.getElementById('todo-form')
//get form value


addBtn.addEventListener('click' , showForm)
function showForm () { 
  
    inputForm.classList.add('show')
}
//add to todo list table
function addTodoList() {
    //get  table body
    const list = document.getElementById('todo-list');
    //get input value
    const todoInput = document.getElementById('todo').value
    const timeInput = document.getElementById('time').value
    //creat new row
    const row = document.createElement('tr');
// put info in new row
    row.innerHTML = `
    <td>${todoInput}</td>
    <td>${timeInput}</td>
    <td><a href="#" class="btn btn-secondary btn-sm disable">Y</a></td>
    <td><a href="#" class="btn btn-danger btn-sm delete">x</a></td>`;

    list.appendChild(row);
    //clear fields
   function clearfields() {
    document.getElementById('time').value= ''
    document.getElementById('todo').value= ''
   } 
   clearfields()
   document.querySelector('.delete').addEventListener('click', (e) => {
    document.querySelector('.delete').parentElement.parentElement.remove()
})
};

//add from form
document.querySelector('#todo-form').addEventListener('submit', (e) => {
   
    //prevent submit action
    e.preventDefault()

    addTodoList()
    // remove form
    inputForm.classList.remove('show')
})


 
