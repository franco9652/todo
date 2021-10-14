/* import { TodoList } from './classes/todo-list.class.js';
import { Todo } from './classes/todo.class.js'; */
import { createTodoHtml, saludar } from './js/componentes.js';
import './styles.css';
import{Todo, TodoList} from './classes'

export const todoList = new TodoList();
const tarea = new Todo('haciendo la prueba tecnica');

todoList.newTodo(tarea);
console.log(todoList);

createTodoHtml(tarea);