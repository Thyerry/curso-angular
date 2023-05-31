import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
	declarations: [AppComponent],
	imports: [BrowserModule, ReactiveFormsModule, BrowserAnimationsModule],
	providers: [],
	bootstrap: [AppComponent],
})
export class AppModule {}
