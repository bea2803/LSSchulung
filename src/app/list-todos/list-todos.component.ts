import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TodoDataService } from '../service/data/todo-data.service';

export class Todo{
  constructor(public id: number, public description:string, public done:boolean, public targetDate:Date) {

  }
}
@Component({
  selector: 'app-list-todos',
  templateUrl: './list-todos.component.html',
  styleUrls: ['./list-todos.component.css']
})
export class ListTodosComponent implements OnInit {
    todos: Todo[] = [];
    message: string = ''
    //new Todo(1,'Learn to dance', false, new Date()),
    //new Todo(2,'Learn to sing', false, new Date()),
    //new Todo(3,'Learn to do anything', false, new Date())
    // {id : 1, description : 'Learn to dance'},
    // {id : 2, description: 'Learn to sing'}, 
    // {id : 3, description:'Learn to do anything'}
    //]
    // todo = {
   //   id: 1,
    //   description: 'Learn to dance'
    //  }

  constructor(private todoService:TodoDataService, private router: Router) { }

  ngOnInit(): void {
   this.refreshTodos();
  }

  refreshTodos() {
  this.todoService.retrieveAllTodos('bea').subscribe(
    response => {
      console.log(response); 
      this.todos = response;
    }
  )
}

  deleteTodo(id: any){
    console.log(`deleted ${id}`)
    this.todoService.deleteTodo('bea', id).subscribe (
      response => {
      console.log(response);
      this.message = `Delete of Todo ${id} successful` 
      this.refreshTodos();
    }
    )
  }

  updateTodo(id: any){
    console.log(`update ${id}`)
    this.router.navigate(['todos', id])
  }

  addTodo() {
    this.router.navigate(['todos', -1])
  }

}
