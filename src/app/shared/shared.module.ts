import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// Componentes - Shared
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';

// Componentes
import { NavComponent } from '../components/nav/nav.component';

/* Font Awesome */
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent,
    NavComponent
  ],
  exports: [
    HeaderComponent,
    FooterComponent
  ],
  imports: [
    CommonModule,
    FontAwesomeModule
  ]
})

export class SharedModule { }
