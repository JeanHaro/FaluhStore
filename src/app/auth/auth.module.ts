import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// Componentes - Auth
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';

// Font Awesome
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

@NgModule({
  declarations: [
    LoginComponent,
    RegisterComponent
  ],
  exports: [
    LoginComponent,
    RegisterComponent
  ], 
  imports: [
    CommonModule,
    FontAwesomeModule
  ]
})
export class AuthModule { }
