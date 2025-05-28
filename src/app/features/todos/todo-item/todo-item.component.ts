import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Todo, TodoService } from '../todo.service';

@Component({
  selector: 'app-todo-item',
  standalone: false,
  templateUrl: './todo-item.component.html',
  styleUrl: './todo-item.component.scss',
})
export class TodoItemComponent {
  @Input() todo!: Todo;
  @Output() statusChanged = new EventEmitter<void>();

  constructor(private todoService: TodoService) { }

  updateStatus(todo: any): void {
    this.todoService.updateTodo(todo).subscribe((updated) => {
      this.statusChanged.emit(); // اعلام به کامپوننت والد برای به‌روزرسانی لیست
    });
  }
}
