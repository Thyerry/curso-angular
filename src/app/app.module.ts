import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgToastModule } from 'ng-angular-popup';

@NgModule({
	declarations: [AppComponent],
	imports: [
		BrowserModule,
		ReactiveFormsModule,
		BrowserAnimationsModule,
		NgToastModule,
	],
	providers: [],
	bootstrap: [AppComponent],
})
export class AppModule {}
