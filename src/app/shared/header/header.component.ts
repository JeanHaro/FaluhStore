import { Component, OnInit } from '@angular/core';

// Iconos - FontAwesome
import { 
  faBars, 
  faXmark,
  faCartShopping,
  faUser,
  faListUl,
  faMagnifyingGlass
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

  activeCtg: boolean = false;
  activeMobile: boolean = false;

  activeCategories (ctg: boolean = false) {
    const categories = document.querySelector('.header .header__categories');
    const list_categories = document.querySelector('.header__nav-categories');

    if (this.activeCtg || ctg) {
      list_categories?.classList.add('left-n100');
      list_categories?.classList.remove('left-none');
      categories?.classList.remove('activeCategorie');
      this.faListUl = faListUl;

      this.activeCtg = false;
    } else {
      list_categories?.classList.add('left-none');
      list_categories?.classList.remove('left-n100');
      categories?.classList.add('activeCategorie');
      this.faListUl = faXmark;

      this.activeBar(true);

      this.activeCtg = true;
    }
  }

  activeBar (mobile: boolean = false) {
    const barMobile = document.querySelector('.header .header__mobile');
    const navBar = document.querySelector('.header .header__nav');

    if (this.activeMobile || mobile) {
      navBar?.classList.remove('left-none');
      navBar?.classList.remove('right-none');
      navBar?.classList.add('left-n100');
      navBar?.classList.add('right-p100');
      barMobile?.classList.remove('activeCategorie');
      this.faBars = faBars;

      this.activeMobile = false;
    } else {
      navBar?.classList.add('left-none');
      navBar?.classList.add('right-none');
      navBar?.classList.remove('left-n100');
      navBar?.classList.remove('right-p100');
      barMobile?.classList.add('activeCategorie');
      this.faBars = faXmark;

      this.activeCategories(true);

      this.activeMobile = true;
    }
  }
}
