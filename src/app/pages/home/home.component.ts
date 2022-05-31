import { Component, OnInit, SimpleChanges, ViewEncapsulation } from '@angular/core';

import SwiperCore, {Autoplay, Pagination, Navigation} from 'swiper';

SwiperCore.use([Autoplay, Pagination, Navigation]);

import { 
  faPlay, 
  faPause, 
  faVolumeHigh, 
  faVolumeLow, 
  faVolumeXmark,
  faCartShopping
} from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    setInterval(() => {
      this.perviewSlide()
    });
  }

  // Iconos
  faPlay = faPlay;
  faPause = faPause;
  faVolumeHigh = faVolumeHigh;
  faVolumeLow = faVolumeLow;
  faVolumeXmark = faVolumeXmark;
  faCartShopping = faCartShopping;

  perviewSlide(): number {
    if (window.innerWidth < 768) {
      let perview = 1;
      return perview;
    } else if (window.innerWidth < 900) { 
      let perview = 2;
      return perview;
    } else if (window.innerWidth < 1200) {
      let perview = 4;
      return perview;
    } else {
      let perview = 6;
      return perview;
    }
  }
}
