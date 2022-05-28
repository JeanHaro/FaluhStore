import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

/* Pagina general */
import { AppComponent } from './app.component';

/* Routing */
import { AppRoutingModule } from './app-routing.module';

/* Pages */
import { NoPageFoundComponent } from './pages/no-page-found/no-page-found.component';
/* Modulo - Pages */
import { PagesModule } from './pages/pages.module';

/* Auth */
import { LoginComponent } from './auth/login/login.component';
import { RegisterComponent } from './auth/register/register.component';

// Font Awesome
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    NoPageFoundComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    PagesModule,
    FontAwesomeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
