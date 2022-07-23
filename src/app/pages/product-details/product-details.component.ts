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
    setInterval(() => {
      this.perviewSlide()
    });
  }

  // Iconos
  faChevronLeft = faChevronLeft;
  faChevronRight = faChevronRight;
  faCartShopping = faCartShopping;

  // Slider Productos
  // Slider Productos
  perviewSlide(): number {
    if (window.innerWidth < 768) {
      let perview = 1;
      return perview;
    } else if (window.innerWidth < 1100) { 
      let perview = 3;
      return perview;
    } else if (window.innerWidth < 1400) {
      let perview = 4;
      return perview;
    } else if (window.innerWidth < 1900) {
      let perview = 5;
      return perview;
    } else if (window.innerWidth < 2300) {
      let perview = 6;
      return perview;
    } else {
      let perview = 7;
      return perview;
    }
  }
}
