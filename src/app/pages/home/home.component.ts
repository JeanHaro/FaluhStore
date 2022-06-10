import { Component, OnInit, SimpleChanges, ViewEncapsulation } from '@angular/core';

import SwiperCore, {Autoplay, Pagination, Navigation} from 'swiper';

SwiperCore.use([Autoplay, Pagination, Navigation]);

import { 
  faPlay, 
  faPause, 
  faVolumeHigh, 
  faVolumeLow, 
  faVolumeXmark,
  faCartShopping,
  faExpand,
  faCompress
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
  faExpand = faExpand;
  faCartShopping = faCartShopping;
  faCompress = faCompress;

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
