import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { Book } from './models/book.model';
import { map } from 'rxjs/operators';

import * as firebase from 'firebase/app';

// These imports load individual services into the firebase namespace.
import 'firebase/auth';
import 'firebase/database';
import DataSnapshot = firebase.database.DataSnapshot;

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss']
})

export class AppComponent {

    title = "Ma bibliothèque";
    books: Book[] = [];

    constructor() {
	console.log ('Entrée dans constructor. Liaison à firebase');

	const config = {
	    apiKey: "AIzaSyBRvorDmAKFK9vneHnRsom9mDW398uUxEg",
	    authDomain: "une-bibliotheque-90c91.firebaseapp.com",
	    databaseURL: "https://une-bibliotheque-90c91.firebaseio.com",
	    projectId: "une-bibliotheque-90c91",
	    storageBucket: "une-bibliotheque-90c91.appspot.com",
	    messagingSenderId: "1012969104430",
	    appId: "1:1012969104430:web:815509d2f2949a33"
	};

	firebase.initializeApp(config);
	this.getBooks();
    }

    getBooks() {
	console.log ('Entrée dans getBooks');
	firebase.database().ref('books')
		.on('value', (data: DataSnapshot) => {
		    this.books = data &&
				 data.val()
				     .map(a_book =>
					 new Book(a_book.title, a_book.author)) || [];
		    
		    //the code below works too
		    //this.books = [];
		    //data && data.forEach(e => {
		    //  const a_book = e.val();
		    //  this.books.push(new Book(a_book.title, a_book.author));
		    //});
		});
    }
}
