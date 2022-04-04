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

  ngOnInit(): void {
  }

  // Iconos
  faBars = faBars;
  faXmark = faXmark;
  faCartShopping = faCartShopping;
  faUser = faUser;
  faListUl = faListUl;
  faMagnifyingGlass = faMagnifyingGlass;
}
