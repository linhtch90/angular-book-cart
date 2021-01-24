import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CookBookComponent } from './cook-book/cook-book.component';
import { TopBarComponent } from './top-bar/top-bar.component';
import { BookDetailsComponent } from './book-details/book-details.component';
import { CartComponent } from './cart/cart.component';

@NgModule({
  declarations: [
    AppComponent,
    CookBookComponent,
    TopBarComponent,
    BookDetailsComponent,
    CartComponent
  ],
  imports: [
    BrowserModule,
      AppRoutingModule,
      RouterModule.forRoot([
	  {path: '', component: CookBookComponent},
	  {path: 'cookbook/:cookbookId', component: BookDetailsComponent},
	  {path: 'cart', component: CartComponent}
      ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
