import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

export interface Todo {
  id: number;
  title: string;
  isCompleted: boolean; // وضعیت تسک (انجام شده/انجام نشده)
}

@Injectable({
  providedIn: 'root'
})
export class TodoService {

  private apiUrl = 'https://localhost:7085/api/Todo';  // URL API بک‌اند شما
  todoService: any;
  todos: any;

  constructor(private http: HttpClient) { }

  getTodos(): Observable<Todo[]> {
    return this.http.get<Todo[]>(this.apiUrl);
  }

  addTodo(newTodo: Todo): Observable<Todo> {
    return this.http.post<Todo>(this.apiUrl, newTodo);
  }
    

  updateTodo(todo: Todo): Observable<Todo> {
    return this.http.put<Todo>(`${this.apiUrl}/${todo.id}`, todo);
  }  
  editTodo(todo: Todo): void {
    const updatedTodo: Todo = { ...todo, title: 'Updated Title' }; // ایجاد یک نمونه ویرایش‌شده
    this.todoService.updateTodo(updatedTodo).subscribe({
      next: (result: { id: any; }) => {
        console.log('Todo updated successfully:', result);
        const index = this.todos.findIndex(t => t.id === result.id);
        if (index !== -1) {
          this.todos[index] = result; // به‌روزرسانی لیست محلی
        }
      },
      error: (err: any) => console.error('Error updating todo:', err)
    });
  }
  

  deleteTodo(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${id}`);
  }
  
}