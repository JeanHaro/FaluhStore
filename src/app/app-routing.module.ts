import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

// Componentes - Auth
import { LoginComponent } from './auth/login/login.component';
import { RegisterComponent } from './auth/register/register.component';

// Componente - 404
import { NoPageFoundComponent } from './no-page-found/no-page-found.component';

// Componentes - Pages
// Pages - Padre
import { PagesComponent } from './pages/pages.component';
// Pages - Hijos
import { HomeComponent } from './pages/home/home.component';
import { CartComponent } from './pages/cart/cart.component';
import { AllProductsComponent } from './pages/all-products/all-products.component';
import { ProductDetailsComponent } from './pages/product-details/product-details.component'; 
import { OffersComponent } from './pages/offers/offers.component';
import { ContactComponent } from './pages/contact/contact.component';

// Rutas de aplicación
const routes: Routes = [
  // Pages
  {
    path: '',
    component: PagesComponent,
    /* Rutas hijas */
    children: [
      { path: 'home', component: HomeComponent },
      { path: 'cart', component: CartComponent },
      { path: 'all-products', component: AllProductsComponent },
      { path: 'product', component: ProductDetailsComponent },
      { path: 'offers', component: OffersComponent },
      { path: 'contact', component: ContactComponent },
      // Redirección
      { path: '', redirectTo: '/home', pathMatch: 'full' },
    ]

  },

  // Auth
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },

  // No hay o no existe la ruta
  { path: '**', component: NoPageFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
