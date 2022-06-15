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
import { ProfileComponent } from "./profile/profile.component";

const routes: Routes = [
    {
        path: 'home',
        component: PagesComponent,
        children: [
            { path: '', component: HomeComponent },
            { path: 'all-products', component: AllProductsComponent },
            { path: 'cart', component: CartComponent },
            { path: 'contact', component: ContactComponent },
            { path: 'offers', component: OffersComponent },
            { path: 'product', component: ProductDetailsComponent },
            { path: 'profile', component: ProfileComponent }
        ]
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})

export class PagesRoutingModule {};
