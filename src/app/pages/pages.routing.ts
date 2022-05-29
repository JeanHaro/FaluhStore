// Rutas internas
import { Routes, RouterModule, Router } from "@angular/router";
import { NgModule } from "@angular/core";

// Componentes - Pages
import { PagesComponent } from './pages.component';
import { HomeComponent } from './home/home.component';
import { AllProductsComponent } from './all-products/all-products.component';
import { CartComponent } from './cart/cart.component';
import { ContactComponent } from './contact/contact.component';
import { OffersComponent } from './offers/offers.component';
import { ProductDetailsComponent } from './product-details/product-details.component';

const routes: Routes = [
    {
        path: '',
        component: PagesComponent,
        children: [
            { path: 'home', component: HomeComponent },
            { path: 'all-products', component: AllProductsComponent },
            { path: 'cart', component: CartComponent },
            { path: 'contact', component: ContactComponent },
            { path: 'offers', component: OffersComponent },
            { path: 'product', component: ProductDetailsComponent },
            
            { path: '', redirectTo: '/home', pathMatch: 'full' }
        ]
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})

export class PagesRoutingModule {};
