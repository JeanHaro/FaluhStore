import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

/* Pagina general */
import { AppComponent } from './app.component';

/* Routing */
import { AppRoutingModule } from './app-routing.module';

/* Pages */
import { HomeComponent } from './pages/home/home.component';
import { AllProductsComponent } from './pages/all-products/all-products.component';
import { CartComponent } from './pages/cart/cart.component';
import { ProductDetailsComponent } from './pages/product-details/product-details.component';
import { OffersComponent } from './pages/offers/offers.component';
import { ContactComponent } from './pages/contact/contact.component';
import { NoPageFoundComponent } from './pages/no-page-found/no-page-found.component';

/* Auth */
import { LoginComponent } from './auth/login/login.component';
import { RegisterComponent } from './auth/register/register.component';

/* Shared  */
import { HeaderComponent } from './shared/header/header.component';
import { FooterComponent } from './shared/footer/footer.component';

/* Componentes */
import { NavComponent } from './components/nav/nav.component';

/* Font Awesome */
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

// Font Awesome
@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    NoPageFoundComponent,
    AllProductsComponent,
    CartComponent,
    ProductDetailsComponent,
    HomeComponent,
    HeaderComponent,
    FooterComponent,
    NavComponent,
    OffersComponent,
    ContactComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FontAwesomeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
