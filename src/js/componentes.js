//metodo que nos permite crear el todo en el html

import { Todo, TodoList } from "../classes";
import{todoList} from '../index'

//referencias en el html
const divTodoList = document.querySelector('.todo-list');
const txtInput = document.querySelector('.new-todo');

export const createTodoHtml = (todo) =>{
    const htmlTodo = `<li class="${(todo.complete) ? 'completed' : ''}" data-id="${todo.id}">
    <div class="view">
        <input class="toggle" type="checkbox"${(todo.completed) ? 'checked' : ''} >
        <label>${todo.task}</label>
        <button class="destroy"></button>
    </div>
    <input class="edit" value="Create a TodoMVC template">
    </li>`;

    //creamos el elemento html
    //por que creamos el elemento div? si tendria
    //que ser un li(lista ordenada)
    //por que el div va a contener esa lista
    const div = document.createElement('div');
    //el dive.inner va a ser igual a todo el elemento html que tengo en el todo
    div.innerHTML = htmlTodo;

    //en vez de inyectar todo ese html que tenemos arriba 
    //le decimos que solo inyecte el primer "hijo" que seria la
    //lista ordenada (<li>)
    //por eso el div.firstElementChild
    divTodoList.append(div.firstElementChild);

   return div.firstElementChild;
}

//eventos
txtInput.addEventListener('keyup', (event) =>{
    if(event.keyCode === 13 && txtInput.value.length > 0){
        console.log(txtInput.value);
        const nuevoTodo = new Todo(txtInput.value);
        todoList.newTodo( nuevoTodo);
        createTodoHtml( nuevoTodo );
        txtInput.value = '';
    }
});

divTodoList.addEventListener('click', (event) =>{
   const nameElement = event.target.localName;
   const todoElement = event.target.parentElement.parentElement;
   const todoId = todoElement.getAttribute('data-id');
   if(nameElement.includes('input')){
    todoList.checkComplete(todoId);
    todoElement.classList.toggle('completed');
   }else if(nameElement.includes('button')){
       todoList.deleteTodo(todoId);
       divTodoList.removeChild(todoElement);
   }
   console.log(todoList);
});