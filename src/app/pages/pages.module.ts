import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

// Componentes - Pages
import { AllProductsComponent } from './all-products/all-products.component';
import { CartComponent } from './cart/cart.component';
import { ContactComponent } from './contact/contact.component';
import { HomeComponent } from './home/home.component';
import { OffersComponent } from './offers/offers.component';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { PagesComponent } from './pages.component';

/* Modulos */
import { SharedModule } from '../shared/shared.module';

/* Font Awesome */
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

/* Swiper */
import { SwiperModule } from 'swiper/angular';

@NgModule({
  declarations: [
    AllProductsComponent,
    CartComponent,
    ContactComponent,
    HomeComponent,
    OffersComponent,
    ProductDetailsComponent,
    PagesComponent
  ],
  exports: [
    AllProductsComponent,
    CartComponent,
    ContactComponent,
    HomeComponent,
    OffersComponent,
    ProductDetailsComponent,
    PagesComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    SharedModule,
    FontAwesomeModule,
    SwiperModule
  ]
})
export class PagesModule { }
