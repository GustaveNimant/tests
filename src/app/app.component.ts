import { Component } from '@angular/core';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss']
})

export class AppComponent {

    private titre = "Mes tests";

    constructor() {
	console.log ('Entrée dans constructor');
    }
}
