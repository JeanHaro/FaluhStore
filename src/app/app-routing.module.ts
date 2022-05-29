import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

// Routing
import { PagesRoutingModule } from './pages/pages.routing';
import { AuthRoutingModule } from './auth/auth.routing';

// Componente - 404
import { NoPageFoundComponent } from './no-page-found/no-page-found.component';


// Rutas de aplicación
const routes: Routes = [
  // No hay o no existe la ruta
  { path: '**', component: NoPageFoundComponent }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes),
    PagesRoutingModule,
    AuthRoutingModule
  ],
  exports: [RouterModule]
})

export class AppRoutingModule { }
