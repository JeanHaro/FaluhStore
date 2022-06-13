import { Component, OnInit } from '@angular/core';

import {
  faChevronDown,
  faChevronUp,
  faCheck
} from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-all-products',
  templateUrl: './all-products.component.html',
  styleUrls: ['./all-products.component.scss']
})
export class AllProductsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  // Iconos
  faChevronDown = faChevronDown;
  faChevronUp = faChevronUp;
  faCheck = faCheck;
}
