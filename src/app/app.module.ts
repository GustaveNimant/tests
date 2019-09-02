import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { BookListComponent } from './book-list/book-list.component';
import { MyObservablesComponent } from './my-observables/my-observables.component';
import { HeaderComponent } from './header/header.component';

@NgModule({
    declarations: [
	AppComponent,
	BookListComponent,
	MyObservablesComponent,
	HeaderComponent
    ],
    imports: [
	BrowserModule,
	AppRoutingModule,
    ],
    providers: [],
    bootstrap: [AppComponent]
})

export class AppModule { }
