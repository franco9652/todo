

export class TodoList{
    constructor(){
        this.todos = [];
    }

    //con este metodo lo unico que haces es insertar esa nueva 
    //tarea en el arreglo.
    newTodo(todo){
        this.todos.push(todo);
    }

    deleteTodo(id){
    this.todos = this.todos.filter(todo => todo.id != id)
    }

    checkComplete(id){
        //vemos si el id del todo es igual al id 
        //que le pasamos por parametro si es igual
        //ese es el que tenemos que cambiar.
        for(const todo of this.todos){
            console.log(id, todo.id);
            if(todo.id == id){
                todo.complete = !todo.complete;
                break;
            }
        }
    }

    deleteCompleted(){
        
    }
}