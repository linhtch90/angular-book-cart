import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { cookBookList } from '../CookBookList';

@Component({
  selector: 'app-book-details',
  templateUrl: './book-details.component.html',
  styleUrls: ['./book-details.component.css']
})
export class BookDetailsComponent implements OnInit {
    book: any;

    constructor(
	private route: ActivatedRoute,
    ) { }

    ngOnInit(): void {
	const routeParams = this.route.snapshot.paramMap;
	const bookIdFromRoute = Number(routeParams.get('cookbookId'));

	this.book = cookBookList.find(book => book.id === bookIdFromRoute);
  }

}
