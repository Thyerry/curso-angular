import { Component } from '@angular/core';
import { Todo } from '../models/todo.model';

@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.css'],
})
export class AppComponent {
	public todos: Todo[] = [];
	public title: String = 'minha lista';
	constructor() {
		this.todos.push(new Todo(1, 'passear com o cachorro', false));
		this.todos.push(new Todo(2, 'ir para o supermercado', false));
		this.todos.push(new Todo(3, 'cortar o cabelo', false));
	}

	remove(todo: Todo) {
		const index = this.todos.indexOf(todo);
		if (index !== -1) this.todos.splice(index, 1);
	}
	markAsDone(todo: Todo) {
		todo.done = true;
	}
	markAsUndone(todo: Todo) {
		todo.done = false;
	}
}
