import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { TodoService } from '../shared/service/todo.service';
import * as shortid from 'shortid';

@Component({
  selector: 'app-todo-form',
  templateUrl: './todo-form.component.html',
  styleUrls: ['./todo-form.component.css']
})
export class TodoFormComponent implements OnInit {
  todoForm: FormGroup;
  constructor(private _formBuilder: FormBuilder, private todoService: TodoService) { }

  ngOnInit(): void {
    this.todoForm = this.createTodoForm();
  }

  createTodoForm(): FormGroup {
    return this._formBuilder.group({
      name: ['', Validators.required],
    })
  }

  addTodo(): void {
    const todo = this.todoForm.getRawValue().name;
    const id = shortid.generate();

    this.todoService.addTodo({
      id: id,
      title: todo
    });
    this.todoForm.reset();
  }
}
