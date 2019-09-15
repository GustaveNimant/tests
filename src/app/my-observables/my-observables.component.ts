import { Component, OnDestroy, OnInit } from '@angular/core';
import { map, tap } from 'rxjs/operators';
import { of, from, interval} from 'rxjs';
import { Observable } from 'rxjs';
import { Subscription }       from 'rxjs';

import * as outils from '../models/outils';

@Component({
    selector: 'app-my-observables',
    templateUrl: './my-observables.component.html',
    styleUrls: ['./my-observables.component.scss']
})

export class MyObservablesComponent implements OnInit, OnDestroy {

    public N_value: string;
    public O_value: string;
    public P_value: number;
    public Q_value: number;

    private nSub: Subscription;
    private oSub: Subscription;
    private pSub: Subscription;
    private qSub: Subscription;
    
    constructor() {
	console.log ('Entrée dans constructor')
    }
    
    ngOnInit() {
	const N = this.myObservable(1);
	console.log('Observable N', N);
	
	this.nSub = N.subscribe(
	    (val) => {
		this.N_value = val;
		console.log('Observable N valeur',val);
	    }, (error) => {
		console.log(error);
	    }, () => {
		console.log('Fini !');
	    });

	console.log('nSub',this.nSub);
	console.log('N_value',this.N_value);
	
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
	
	const P = this.myObservable(3);
	console.log('Observable P', P);
	this.pSub = P.pipe(
	    tap((val) => console.log('P Avant : ' + val)),
	    map((val: string) => val.length),
	    tap((val) => console.log('P Après : ' + val)),
	).subscribe((val: number) => {
	    this.P_value = val;
	    console.log(val);  // 5
	});
	console.log('pSub',this.pSub);
	console.log('P_value',this.P_value);
	
	const Q = this.myObservable(4);
	console.log('Observable Q', Q);
	this.qSub = Q.pipe(
	    tap((val) => console.log('Q Avant : ' + val)),
	    map((val: number) => val + 10),
	    tap((val) => console.log('Q Après : ' + val)),
	).subscribe((val: number) => {
	    this.Q_value = val;
	    console.log(val);  
	});
    }
    
    myObservable(num: number):Observable<any> {
	const myObservable1 = of(10, 42, "s");
	const myObservable2 = of("foobar");
	const myObservable3 = from(['bonjour', 'le ', 'monde']);
	const myObservable4 = interval(2000);
	
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

    ngOnDestroy() {
	console.log('Dans ngOnDestroy Observable Q unsubscribed');
	this.qSub.unsubscribe();
    }

}

