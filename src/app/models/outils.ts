export function affiche (here: string, str: string){
    console.log (here, str);
}

export function partStringOfNumber(num: number) {
    switch (num) {
	case 1:
	    return 'part-one';
	    break;
	case 2:
	    return 'part-two';
	    break;
	case 3:
	    return 'part-three';
	    break;
	case 4:
	    return 'part-four';
	    break;
	case 5:
	    return 'part-five';
	    break;
	default:
	    return 'part-five';
	    break;
    }
}

