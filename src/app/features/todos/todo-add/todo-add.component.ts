import { Component, OnInit } from '@angular/core';
import { Todo, TodoService } from '../todo.service';

@Component({
  selector: 'app-todo-add',
  standalone: false,
  templateUrl: './todo-add.component.html',
  styleUrl: './todo-add.component.scss'
})
export class TodoAddComponent implements OnInit {
  todos: Todo[] = [];
  newTodoText: string = '';  // متغیر برای ذخیره متن تسک جدید
  newTaskText: string = 'deafult task';

  constructor(private todoService: TodoService) { }

  ngOnInit(): void {
    this.todoService.getTodos().subscribe((todos) => {
      this.todos = todos;
    });
  }

  addTodo() {
    console.log('newTaskText:', this.newTaskText); // بررسی مقدار
    if (!this.newTaskText || !this.newTaskText.trim()) {
      console.error("newTaskText is undefined or empty");
      return;
    }
  
    const newTodo: Todo = {
      id: 0,
      title: this.newTaskText.trim(),
      isCompleted: false
    };
  
    this.todoService.addTodo(newTodo).subscribe({
      next: (result) => {
        this.todos.push(result);
        this.newTaskText = 'test task';
      },
      error: (err) => console.error(err)
    });
  }
  
  
  
}
