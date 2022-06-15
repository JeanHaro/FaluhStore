import { Component, OnInit } from '@angular/core';

import {
  faChevronDown,
  faChevronUp,
  faCheck,
  faCartShopping
} from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-offers',
  templateUrl: './offers.component.html',
  styleUrls: ['./offers.component.scss']
})
export class OffersComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  // Iconos
  faChevronDown = faChevronDown;
  faChevronUp = faChevronUp;
  faCheck = faCheck;
  faCartShopping = faCartShopping;
}
