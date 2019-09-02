import { Component, OnInit } from '@angular/core';
import { map, tap } from 'rxjs/operators';
import { of, from, interval} from 'rxjs';
import { Observable } from 'rxjs';


import * as outils from '../models/outils';

@Component({
    selector: 'app-my-observables',
    templateUrl: './my-observables.component.html',
    styleUrls: ['./my-observables.component.scss']
})

export class MyObservablesComponent implements OnInit {

    public O_value: string;
    public P_value: string;
    
    constructor() {
	console.log ('Entrée dans constructor')
    }
    
    ngOnInit() {
	const O = this.myObservable(2);
	console.log('Observable O', O);
	
	O.subscribe(
	    (val) => {
		this.O_value = val;
		console.log('Observable O valeur',val);
	    }, (error) => {
		console.log(error);
	    }, () => {
		console.log('Fini !');
	    });

	console.log('O_value',this.O_value);
	
	const P = this.myObservable(2);
	console.log('Observable P', P);
	P.pipe(
	    tap((val) => console.log('Avant : ' + val)),
	    map((val: string) => val.length),
	    tap((val) => console.log('Après : ' + val)),
	).subscribe((val: number) => {
	    console.log(val);  // 6
	});

	const Q = this.myObservable(2);
	console.log('Observable Q', Q);
	Q.pipe(
	    tap((val) => console.log('Avant : ' + val)),
	    map((val: string) => val.length),
	    tap((val) => console.log('Après : ' + val)),
	).subscribe((val: number) => {
	    console.log(val);  // 6
	});

    }
    
    myObservable(num: number):Observable<any> {
	const myObservable1 = of(42);
	const myObservable2 = from(['bonjour', 'le', 'monde']);
	const myObservable3 = interval(2000);
	const myObservable4 = of("foobar");
	
	switch (num) {
	    case 1:
		return myObservable1;
		break;
	    case 2:
		return myObservable2;
		break;
	    case 3:
		return myObservable3;
		break;
	    case 4:
		return myObservable4;
		break;
	    default:
		break;
	}
    }

}

