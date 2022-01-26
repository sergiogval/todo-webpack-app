const [first, second, third] = [
  {id: 1, description: 'tarea 1', completed: false},
  {id: 2, description: 'tarea 2', completed: false},
  {id: 3, description: 'tarea 3', completed: false},
]

let arr = [first, second, third]
let todos = document.getElementById('todos')

for(let i = 0; i <= arr.length, arr += 1;) {
  todos = document.createElement(`li`)
  todos.textContent = `
  <li class="todoItem">
  <div>
  <input class="checker" id=${ arr[i].id } type="checkbox" value="${ arr[i].completed }"/>
  <label for="${ arr[i].id }">${ arr[i].description }</label>
  </div>
  <button type="button" class="positioner">
  <i class="fa fa-ellipsis-v"></i>
  </button>
  </li>`
}
document.appendChild(todos)

