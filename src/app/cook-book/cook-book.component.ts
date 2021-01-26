import { Component, OnInit } from '@angular/core';
import { CartServiceService } from '../cart-service.service';

import {cookBookList} from '../CookBookList';

@Component({
  selector: 'app-cook-book',
  templateUrl: './cook-book.component.html',
  styleUrls: ['./cook-book.component.css']
})
export class CookBookComponent implements OnInit {
    cookBookList = cookBookList;

    addToCart(book: any) {
	this.cartService.addToCart(book);
    }

    constructor(
	private cartService: CartServiceService 
    ) { }

  ngOnInit(): void {
  }

}
