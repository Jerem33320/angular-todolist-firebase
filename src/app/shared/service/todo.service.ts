import { Injectable } from '@angular/core';
import { Todo } from '../model/todo';
import firebase from 'firebase/app';

@Injectable({
  providedIn: 'root'
})
export class TodoService {
  db = firebase.firestore().collection('todolist')
  todos: Todo[]=[];
  
  constructor() { }

  getTodos(){
    return this.todos;
  }

  addTodo(todo){
    this.todos.push(todo);
    this.db.add(todo);
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
