import { Component, OnInit } from '@angular/core';

import {
  faCartShopping,
  faPencil,
  faTrash,
  faCheck,
  faList
} from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  // Inicio
  faCartShopping = faCartShopping;
  faPencil = faPencil;
  faTrash = faTrash;
  faCheck = faCheck;
  faList = faList;
}
