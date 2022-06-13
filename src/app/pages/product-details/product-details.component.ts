import { Component, OnInit, ViewEncapsulation } from '@angular/core';

// Swiper
import SwiperCore, { Pagination } from "swiper";
SwiperCore.use([Pagination]);

// FontAwesome
import { 
  faChevronLeft, 
  faChevronRight,
  faCartShopping  
} from '@fortawesome/free-solid-svg-icons'

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.scss'],
  encapsulation: ViewEncapsulation.None
})

export class ProductDetailsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  // Iconos
  faChevronLeft = faChevronLeft;
  faChevronRight = faChevronRight;
  faCartShopping = faCartShopping;
}
