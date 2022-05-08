import { Component, OnInit } from '@angular/core';

// Iconos - FontAwesome
import { 
  faBars, 
  faListUl,
  faXmark,
  faCartShopping,
  faUser,
  faMagnifyingGlass,
  faMoon,
  faSun
} from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})

export class HeaderComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {}

  // Iconos
  faBars = faBars;
  faXmark = faXmark;
  faCartShopping = faCartShopping;
  faUser = faUser;
  faListUl = faListUl;
  faMagnifyingGlass = faMagnifyingGlass;
  faSun = faSun;
  faMoon = faMoon;

  // Checks
  activeCtg: boolean = false;
  activeMobile: boolean = false;

  // Activar navegaciones
  activeGlobal (element: Element | null, content: Element | null, on: Boolean, on2: Boolean) {
    if (on || on2) {
      element?.classList.add('left-n100');
      element?.classList.remove('left-none');
      element?.classList.add('right-p100');
      element?.classList.remove('right-none');
      content?.classList.remove('activeCategorie');
    } else {
      element?.classList.remove('left-n100');
      element?.classList.add('left-none');
      element?.classList.remove('right-p100');
      element?.classList.add('right-none');
      content?.classList.add('activeCategorie');
    }
  }

  // Navegación - Categorias
  activeCategories (ctg: boolean = false) {
    // Elementos
    const categories = document.querySelector('.header .header__categories');
    const list_categories = document.querySelector('.header__nav-categories');

    // activeCtg = true --> hidden
    if (this.activeCtg || ctg) {
      this.activeGlobal(list_categories, categories, this.activeCtg, ctg);

      // Icon
      this.faListUl = faListUl;

      this.activeCtg = false;
    } else {
      this.activeGlobal(list_categories, categories, this.activeCtg, ctg);

      // Icon
      this.faListUl = faXmark;

      this.activeCtg = true;
      this.activeBar(true);
    }
  }

  // Navegación - Bars
  activeBar (mobile: boolean = false) {
    // Elementos
    const barMobile = document.querySelector('.header .header__mobile');
    const navBar = document.querySelector('.header .header__nav');

    // Tamaño de la pantalla es menor a 768
    if (window.innerWidth < 768) {
      if (this.activeMobile || mobile) {
        this.activeGlobal(navBar, barMobile, this.activeMobile, mobile);
        // Icon
        this.faBars = faBars;

        this.activeMobile = false;
      } else {
        this.activeGlobal(navBar, barMobile, this.activeMobile, mobile);
        // Icon
        this.faBars = faXmark;

        this.activeMobile = true;
        this.activeCategories(true);
      }
    } else {
      this.faBars = faBars;

      navBar?.classList.add('left-n100');
      navBar?.classList.remove('left-none');
      navBar?.classList.add('right-p100');
      navBar?.classList.remove('right-none');
      barMobile?.classList.remove('activeCategorie');
    }
  }
}
