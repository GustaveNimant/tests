import { Component, OnInit } from '@angular/core';
import * as shajs from 'sha.js';
import * as jsSHA from 'jssha';

@Component({
    selector: 'app-my-functions',
    templateUrl: './my-functions.component.html',
    styleUrls: ['./my-functions.component.scss']
})

export class MyFunctionsComponent implements OnInit {

    constructor() { }

    ngOnInit() {

	const secret = 'abcdefg';
	//	const myhash = shajs('sha256').update(secret).digest('hex');
	//	console.log ('myhash', myhash);

	const shaObj_1 = new jsSHA("SHA-512", "TEXT");
	shaObj_1.update("This is a ");
	shaObj_1.update("test");
	const hash_1 = shaObj_1.getHash("HEX");
	console.log ('hash_1', hash_1);

	const shaObj_2 = new jsSHA("SHA-512", "TEXT");
	shaObj_2.update("This is a test");
	const hash_2 = shaObj_2.getHash("HEX");
	console.log ('hash_2', hash_2);

	const hash_512 = this.createSha('This is a test', 'SHA-512', 'TEXT', 'HEX');
	console.log ('hash_512', hash_512);

    	const hash_256 = this.createSha('This is a test', 'SHA-256', 'TEXT', 'HEX');
	console.log ('hash_256', hash_256);
    }

    createSha (str:string, typeSha:string, formatInput: string, formatOutput: string) {
	switch (typeSha) {
	    case "SHA-1":
	    case "SHA-224":
	    case "SHA3-224":
	    case "SHA-256":
	    case "SHA3-256":
	    case "SHA-384":
	    case "SHA3-384":
	    case "SHA-512":
	    case "SHA3-512":
	    case "SHAKE128":
	    case "SHAKE256":
		break;
	    default:
		console.log('Dans createShaOfTypeOfString le type de SHA illégal',typeSha);
		break;
	}

	switch (formatInput) {
	    case "TEXT":
		break;
	    default:
		console.log('Dans createShaOfTypeOfString le format d\'Input de SHA illégal',formatInput);
		break;
	}

	switch (formatOutput) {
	    case "HEX":
		break;
	    default:
		console.log('Dans createShaOfTypeOfString le format d\'Output de SHA illégal',formatOutput);
		break;
	}

	const shaObj = new jsSHA(typeSha, formatInput);
	shaObj.update(str);
	const hash = shaObj.getHash(formatOutput);
	return hash;
    }
}
