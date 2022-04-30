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

  navWomen() {
    const ctgWomen_effect = document.querySelector('.navigation__ctg.nav__women .nav__effect');
    const ctgMen_effect = document.querySelector('.navigation__ctg.nav__men .nav__effect');
    const ctgChild_effect = document.querySelector('.navigation__ctg.nav__child .nav__effect');
    const ctgBaby_effect = document.querySelector('.navigation__ctg.nav__baby .nav__effect');

    const optionWomen = document.querySelector('.navigation__content .option__women');
    const optionMen = document.querySelector('.navigation__content .option__men');
    const optionChild = document.querySelector('.navigation__content .option__child');
    const optionBaby = document.querySelector('.navigation__content .option__baby');


    if (window.innerWidth >= 768) {
      ctgWomen_effect?.classList.add('active-effect');
      
      optionWomen?.classList.add('opacity-none');
      optionMen?.classList.add('opacity-0');
      optionChild?.classList.add('opacity-0');
      optionBaby?.classList.add('opacity-0');

      ctgMen_effect?.classList.remove('active-effect');
      ctgChild_effect?.classList.remove('active-effect');
      ctgBaby_effect?.classList.remove('active-effect');
      
      optionWomen?.classList.remove('opacity-0');
      optionMen?.classList.remove('opacity-none');
      optionChild?.classList.remove('opacity-none');
      optionBaby?.classList.remove('opacity-none');
    } 
  }

  navMen() {
    const ctgWomen_effect = document.querySelector('.navigation__ctg.nav__women .nav__effect');
    const ctgMen_effect = document.querySelector('.navigation__ctg.nav__men .nav__effect');
    const ctgChild_effect = document.querySelector('.navigation__ctg.nav__child .nav__effect');
    const ctgBaby_effect = document.querySelector('.navigation__ctg.nav__baby .nav__effect');

    const optionWomen = document.querySelector('.navigation__content .option__women');
    const optionMen = document.querySelector('.navigation__content .option__men');
    const optionChild = document.querySelector('.navigation__content .option__child');
    const optionBaby = document.querySelector('.navigation__content .option__baby');

    if (window.innerWidth >= 768) {
      ctgMen_effect?.classList.add('active-effect');

      optionWomen?.classList.add('opacity-0');
      optionMen?.classList.add('opacity-none');
      optionChild?.classList.add('opacity-0');
      optionBaby?.classList.add('opacity-0');

      ctgWomen_effect?.classList.remove('active-effect');
      ctgChild_effect?.classList.remove('active-effect');
      ctgBaby_effect?.classList.remove('active-effect');

      optionWomen?.classList.remove('opacity-none');
      optionMen?.classList.remove('opacity-0');
      optionChild?.classList.remove('opacity-none');
      optionBaby?.classList.remove('opacity-none');
    } 
  }

  navChild() {
    const ctgWomen_effect = document.querySelector('.navigation__ctg.nav__women .nav__effect');
    const ctgMen_effect = document.querySelector('.navigation__ctg.nav__men .nav__effect');
    const ctgChild_effect = document.querySelector('.navigation__ctg.nav__child .nav__effect');
    const ctgBaby_effect = document.querySelector('.navigation__ctg.nav__baby .nav__effect');

    const optionWomen = document.querySelector('.navigation__content .option__women');
    const optionMen = document.querySelector('.navigation__content .option__men');
    const optionChild = document.querySelector('.navigation__content .option__child');
    const optionBaby = document.querySelector('.navigation__content .option__baby');

    if (window.innerWidth >= 768) {
      ctgChild_effect?.classList.add('active-effect');

      optionWomen?.classList.add('opacity-0');
      optionMen?.classList.add('opacity-0');
      optionChild?.classList.add('opacity-none');
      optionBaby?.classList.add('opacity-0');

      ctgWomen_effect?.classList.remove('active-effect');
      ctgMen_effect?.classList.remove('active-effect');
      ctgBaby_effect?.classList.remove('active-effect');

      optionWomen?.classList.remove('opacity-none');
      optionMen?.classList.remove('opacity-none');
      optionChild?.classList.remove('opacity-0');
      optionBaby?.classList.remove('opacity-none');
    } 
  }

  navBaby() {
    const ctgWomen_effect = document.querySelector('.navigation__ctg.nav__women .nav__effect');
    const ctgMen_effect = document.querySelector('.navigation__ctg.nav__men .nav__effect');
    const ctgChild_effect = document.querySelector('.navigation__ctg.nav__child .nav__effect');
    const ctgBaby_effect = document.querySelector('.navigation__ctg.nav__baby .nav__effect');

    const optionWomen = document.querySelector('.navigation__content .option__women');
    const optionMen = document.querySelector('.navigation__content .option__men');
    const optionChild = document.querySelector('.navigation__content .option__child');
    const optionBaby = document.querySelector('.navigation__content .option__baby');

    if (window.innerWidth >= 768) {
      ctgBaby_effect?.classList.add('active-effect');

      optionWomen?.classList.add('opacity-0');
      optionMen?.classList.add('opacity-0');
      optionChild?.classList.add('opacity-0');
      optionBaby?.classList.add('opacity-none');

      ctgWomen_effect?.classList.remove('active-effect');
      ctgMen_effect?.classList.remove('active-effect');
      ctgChild_effect?.classList.remove('active-effect');

      optionWomen?.classList.remove('opacity-none');
      optionMen?.classList.remove('opacity-none');
      optionChild?.classList.remove('opacity-none');
      optionBaby?.classList.remove('opacity-0');
    } 
  }
}
