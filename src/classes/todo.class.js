export class Todo{
    constructor(task){
        //taks va a ser igual a la task que recibis
        //por argumento (ejemplo: comprar huevos etc)
        this.task = task;
        this.id = new Date().getTime(); //el getTime nos devuelve numero ya sea segundos o fechas y lo uso como id
        this.complete = false;
        this.create = new Date();
    }
}