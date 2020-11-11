import { Injectable } from '@angular/core';
import { Todo } from '../model/todo';

@Injectable({
  providedIn: 'root'
})
export class TodoService {
  todos: Todo[]=[];
  
  constructor() { }

  getTodos(){
    return this.todos;
  }

  addTodo(todo){
    this.todos.push(todo);
  }

  deleteTodo(id){
    // console.log(this.todos.splice(id,1));
    const newTodos = this.todos.filter(todo => todo.id !== id);
    this.todos = newTodos
    console.log(newTodos);
  }

  // editTodo(valeur, i){
  //   this.todos[i] = valeur;
  // }
}
