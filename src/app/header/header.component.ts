import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription }       from 'rxjs';
import { Router }             from '@angular/router';
import { StateService }       from '../services/state.service';

@Component({
    selector: 'app-header',
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.scss']
})

export class HeaderComponent implements OnInit, OnDestroy {

    public debug: boolean;
    public trace: boolean;

    constructor(private stateService: StateService,
		private router: Router)
		{
		    console.log('Entrée dans constructor');
		};

    ngOnInit() {
	console.log('Entrée dans ngOnInit');

    }

    onDebugSwitch() {
	console.log('Entrée dans onDebugSwitch');
	this.stateService.debugSwitch();
	this.debug = this.stateService.debug;
	console.log('Dans onDebugSwitch debug', this.debug);
    }

    onTraceSwitch() {
	console.log('Entrée dans onTraceSwitch');
	this.stateService.traceSwitch();
	this.trace = this.stateService.trace;
	console.log('Dans onTraceSwitch trace', this.trace);
    }

    ngOnDestroy() {
	console.log('Entrée dans ngOnDestroy');
    }

}
