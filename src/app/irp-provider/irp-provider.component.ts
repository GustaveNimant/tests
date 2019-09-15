import { Component, OnInit } from '@angular/core';
import { IrpService }        from '../services/irp.service';
import { StateService }      from '../services/state.service';

@Component({
    selector: 'app-irp-provider',
    templateUrl: './irp-provider.component.html',
    styleUrls: ['./irp-provider.component.scss']
})

export class IrpProviderComponent implements OnInit {

    public debug: boolean;
    public result:number;
    
    constructor(
	private stateService: StateService,
	private irpService: IrpService
    ){
	console.log('Entrée dans constructor');
    }

    ngOnInit() {
	console.log('Entrée dans ngOnInit');
	this.debug = this.stateService.debug;

//	const irpSer = new this.irpService();
	
	this.result = provide('APlusB');
	console.log('Dand ngOnInit result=',this.result);

	function buildA () {
//	    this.irpService.entering_in_function ('buildA');
	    let result = 4;
	    return result;
	}

	function buildB () {
	    let result = 5;
	    return result;
	}

	function buildAPlusB() {
	    let a = provide('A');
	    let b = provide('B');

	    let result = a + b;
	    return result;
	}

	function provideA () {
	    let result = buildA ()
	    return result;
	}

	function provideB () {
	    let result = buildB ()
	    return result;
	}

	function provideAPlusB () {
	    let result = buildAPlusB();
	    return result;
	}

	function provide (name) {
	    console.log ("provide ("+name+")");

	    let buildName = 'build'+name+ '()';
	    let result = eval (buildName);
	    return result;
	}
    }
}
