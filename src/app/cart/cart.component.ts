import { Component, OnInit } from '@angular/core';

import { CartServiceService } from '../cart-service.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
    booksInCart = this.cartService.getBooksInCart();
    numberOfBooks = this.cartService.getNumberOfBooks();

    constructor(
	private cartService: CartServiceService	
    ) { }

  ngOnInit(): void {
  }

}
