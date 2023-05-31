import { Component } from '@angular/core';
import { Todo } from '../models/todo.model';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.css'],
})
export class AppComponent {
	public todos: Todo[] = [];
	public title: String = 'Minha Lista';
	public form: FormGroup;
	public mode = 'list';

	constructor(private fb: FormBuilder) {
		this.form = this.fb.group({
			title: [
				'',
				Validators.compose([
					Validators.minLength(3),
					Validators.maxLength(60),
					Validators.required,
				]),
			],
		});
		this.load();
	}
	add() {
		const newtitle = this.form.controls['title'].value;
		const newid = this.todos.length + 1;
		this.todos.push(new Todo(newid, newtitle, false));
		this.save();
		this.clear();
	}
	remove(todo: Todo) {
		const index = this.todos.indexOf(todo);
		if (index !== -1) this.todos.splice(index, 1);
		this.save();
	}
	markAsDone(todo: Todo) {
		todo.done = true;
		this.save();
	}
	markAsUndone(todo: Todo) {
		todo.done = false;
		this.save();
	}
	changeMode(newmode: string) {
		this.mode = newmode;
	}
	save() {
		localStorage.setItem('todos', JSON.stringify(this.todos));
	}
	load() {
		const data = localStorage.getItem('todos');
		this.todos = data ? JSON.parse(data) : [];
	}
	clear() {
		this.form.reset();
	}
}
