import { Component, OnInit } from '@angular/core';
import { TodoService } from '../shared/service/todo.service';
import { Todo } from '../shared/model/todo';
import firebase from 'firebase/app';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})

export class ListComponent implements OnInit {
  db = firebase.firestore().collection('todolist');
  todos: Todo[];
  constructor(private todoService: TodoService) { }

  ngOnInit() {
    this.getTodos();
  }

  getTodos(){
    this.todos = this.todoService.getTodos();
  }

  deleteTodo(i){
    this.todoService.deleteTodo(i);
    this.getTodos()
  }
}