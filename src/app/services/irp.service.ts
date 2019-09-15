import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root'
})

export class IrpService {

    entering_in_function (str_fun: string) {
	console.log ("entering in function " + str_fun + "()");
    };
    
    exiting_from_function (str_fun: string ) {
	console.log("exiting from function " + str_fun + "()");
    };

}
