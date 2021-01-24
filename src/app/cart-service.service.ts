import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CartServiceService {
    booksInCart = [];
    numberOfBooks = 0;

    addToCart(book) {
	if (this.booksInCart.length > 0) {
	    for (let i = 0; i < this.booksInCart.length; i++) {
		if (book.id === this.booksInCart[i].id) {
		    this.booksInCart[i].quantity += 1;
		    this.numberOfBooks += 1;
		    console.log(this.booksInCart);
		    console.log(this.numberOfBooks);
		    return;
		} else {
		    if (i === this.booksInCart.length - 1) {
			book.quantity = 1;
			this.booksInCart.push(book);
			this.numberOfBooks += 1;
			console.log(this.booksInCart);
			console.log(this.numberOfBooks);
			return;
		    } else {
			continue;
		    }		    
		}
	    }
	} else {
	    book.quantity = 1;
	    this.booksInCart.push(book);
	    this.numberOfBooks += 1;
	    console.log(this.booksInCart);
	    console.log(this.numberOfBooks);
	}
	
	//this.booksInCart.push(book);
	//this.numberOfBooks += 1;
    }

    getBooksInCart() {
	return this.booksInCart;
    }

    clearCart() {
	this.booksInCart = [];
	this.numberOfBooks = 0;
	return this.booksInCart;
    }

    getNumberOfBooks() {
	return this.numberOfBooks;
    }
    
  constructor() { }
}
