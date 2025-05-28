import { Component, OnInit } from '@angular/core';
import { TodoService } from '../todo.service';
import { Todo } from '../todo.service'; // وارد کردن نوع Todo از سرویس

@Component({
  selector: 'app-todo-list',
  standalone: false,
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.scss'], // اصلاح 'styleUrl' به 'styleUrls'
})
export class TodoListComponent implements OnInit {
  todos: Todo[] = []; // تعریف نوع آرایه todos
  newTodoText: any;

  constructor(private todoService: TodoService) {}

  ngOnInit(): void {
    this.todoService.getTodos().subscribe((todos) => {
      this.todos = todos;
    });
  }

  editTodo(todo: Todo): void {
    const updatedTodo = { ...todo, text: 'New Text' }; // برای مثال، به‌روز کردن متن
    this.todoService.updateTodo(updatedTodo).subscribe((updated) => {
      const index = this.todos.findIndex((t) => t.id === updated.id);
      if (index !== -1) {
        this.todos[index] = updated; // به‌روزرسانی تسک در آرایه
      }
    });
  }

  deleteTodo(id: number): void {
    this.todoService.deleteTodo(id).subscribe(() => {
      this.todos = this.todos.filter(todo => todo.id !== id); // حذف تسک از آرایه
    });
  }

  updateTodoStatus(): void {
    this.todoService.getTodos().subscribe((todos) => {
      this.todos = todos;
    });
  }
  
  addTodo(): void {
    if (this.newTodoText.trim()) {
      const newTodo: Todo = {
        id: this.todos.length + 1, // ID موقتی
        title: this.newTodoText,
        isCompleted: false
      };
      this.todoService.addTodo(newTodo).subscribe((addedTodo) => {
        this.todos.push(addedTodo);  // اضافه کردن تسک به لیست
        this.newTodoText = ''; // پاک کردن ورودی
      });
    }
  }
  
  
}
