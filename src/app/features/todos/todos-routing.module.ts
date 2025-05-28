import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { TodoListComponent } from './todo-list/todo-list.component';
import { TodoAddComponent } from './todo-add/todo-add.component';

const routes: Routes = [
  { path : '' , component : TodoListComponent },
  { path: 'add' , component : TodoAddComponent },
  { path: 'todos', component: TodoListComponent },
  { path: '', redirectTo: 'todos', pathMatch: 'full' }
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class TodosRoutingModule { }
