import { Component, OnInit } from '@angular/core';

// Iconos - FontAwesome
import { 
  faPerson,
  faPersonDress,
  faChild,
  faBaby,
  faAngleRight,
  faRightLong
} from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent implements OnInit {

  constructor() { 
  }

  ngOnInit(): void {
  }

  // Iconos
  faPerson = faPerson;
  faPersonDress = faPersonDress;
  faChild = faChild;
  faBaby = faBaby;
  faAngleRight = faAngleRight;
  faRightLong = faRightLong;

  // Función de añadir y remover clases
  optionCtg (elementEffectAdd: Element | null, elementOptionAdd: Element | null, elementEffectRem: (Element | null)[], elementOptionRem: (Element | null)[]) {
    // Add - active
    elementEffectAdd?.classList.add('active-effect');

    // Add - opacity
    elementOptionAdd?.classList.add('opacity-none');

    elementOptionRem[0]?.classList.add('opacity-0');
    elementOptionRem[1]?.classList.add('opacity-0');
    elementOptionRem[2]?.classList.add('opacity-0');

    // Remove - active
    elementEffectRem[0]?.classList.remove('active-effect');
    elementEffectRem[1]?.classList.remove('active-effect');
    elementEffectRem[2]?.classList.remove('active-effect');

    // Remove - opacity
    elementOptionAdd?.classList.remove('opacity-0');
    
    elementOptionRem[0]?.classList.remove('opacity-none');
    elementOptionRem[1]?.classList.remove('opacity-none');
    elementOptionRem[2]?.classList.remove('opacity-none');
  }

  // Mujer
  navWomen() {
    if (window.innerWidth >= 768) {
      // Elementos
      const ctgWomen_effect = document.querySelector('.navigation__ctg.nav__women .nav__effect');
      const ctgMen_effect = document.querySelector('.navigation__ctg.nav__men .nav__effect');
      const ctgChild_effect = document.querySelector('.navigation__ctg.nav__child .nav__effect');
      const ctgBaby_effect = document.querySelector('.navigation__ctg.nav__baby .nav__effect');

      const optionWomen = document.querySelector('.navigation__content .option__women');
      const optionMen = document.querySelector('.navigation__content .option__men');
      const optionChild = document.querySelector('.navigation__content .option__child');
      const optionBaby = document.querySelector('.navigation__content .option__baby');

      this.optionCtg(ctgWomen_effect, optionWomen, [ctgMen_effect, ctgChild_effect, ctgBaby_effect], [optionMen, optionChild, optionBaby]);
    } 
  }

  // Hombre
  navMen() {
    if (window.innerWidth >= 768) {
      // Elementos
      const ctgWomen_effect = document.querySelector('.navigation__ctg.nav__women .nav__effect');
      const ctgMen_effect = document.querySelector('.navigation__ctg.nav__men .nav__effect');
      const ctgChild_effect = document.querySelector('.navigation__ctg.nav__child .nav__effect');
      const ctgBaby_effect = document.querySelector('.navigation__ctg.nav__baby .nav__effect');

      const optionWomen = document.querySelector('.navigation__content .option__women');
      const optionMen = document.querySelector('.navigation__content .option__men');
      const optionChild = document.querySelector('.navigation__content .option__child');
      const optionBaby = document.querySelector('.navigation__content .option__baby');

      this.optionCtg(ctgMen_effect, optionMen, [ctgWomen_effect, ctgChild_effect, ctgBaby_effect], [optionWomen, optionChild, optionBaby]);
    } 
  }

  // Niños
  navChild() {
    if (window.innerWidth >= 768) {
      // Elementos
      const ctgWomen_effect = document.querySelector('.navigation__ctg.nav__women .nav__effect');
      const ctgMen_effect = document.querySelector('.navigation__ctg.nav__men .nav__effect');
      const ctgChild_effect = document.querySelector('.navigation__ctg.nav__child .nav__effect');
      const ctgBaby_effect = document.querySelector('.navigation__ctg.nav__baby .nav__effect');

      const optionWomen = document.querySelector('.navigation__content .option__women');
      const optionMen = document.querySelector('.navigation__content .option__men');
      const optionChild = document.querySelector('.navigation__content .option__child');
      const optionBaby = document.querySelector('.navigation__content .option__baby');

      this.optionCtg(ctgChild_effect, optionChild, [ctgWomen_effect, ctgMen_effect, ctgBaby_effect], [optionWomen, optionMen, optionBaby]);
    } 
  }

  // Bebes
  navBaby() {
    // Elementos
    const ctgWomen_effect = document.querySelector('.navigation__ctg.nav__women .nav__effect');
    const ctgMen_effect = document.querySelector('.navigation__ctg.nav__men .nav__effect');
    const ctgChild_effect = document.querySelector('.navigation__ctg.nav__child .nav__effect');
    const ctgBaby_effect = document.querySelector('.navigation__ctg.nav__baby .nav__effect');

    const optionWomen = document.querySelector('.navigation__content .option__women');
    const optionMen = document.querySelector('.navigation__content .option__men');
    const optionChild = document.querySelector('.navigation__content .option__child');
    const optionBaby = document.querySelector('.navigation__content .option__baby');

    if (window.innerWidth >= 768) {
      this.optionCtg(ctgBaby_effect, optionBaby, [ctgWomen_effect, ctgMen_effect, ctgChild_effect], [optionWomen, optionMen, optionChild]);
    } 
  }
}
