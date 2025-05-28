import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TodoListComponent } from './todo-list/todo-list.component';
import { TodoAddComponent } from './todo-add/todo-add.component';
import { TodoItemComponent } from './todo-item/todo-item.component';
import { TodosRoutingModule } from './todos-routing.module';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    TodoListComponent,
    TodoAddComponent,
    TodoItemComponent
  ],
  imports: [
    CommonModule,
    TodosRoutingModule,
    FormsModule
  ],
  exports: [TodoAddComponent, TodoItemComponent, TodoListComponent]
})
export class TodosModule { }
