export class Book {
    constructor(public title: string, public author: string) {
	console.log ('Entering in constructor');
    }

    isEqual (other: Book): boolean {
	const are_fully_equal = (this === other); 
	console.log ('isEqual are_fully_equal', are_fully_equal);
	return are_fully_equal;
    }
}

