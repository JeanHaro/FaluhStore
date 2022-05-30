import { Component, OnInit, ViewEncapsulation } from '@angular/core';

import { SwiperComponent } from 'swiper/angular';

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
  }

  // Iconos
  faPlay = faPlay;
  faPause = faPause;
  faVolumeHigh = faVolumeHigh;
  faVolumeLow = faVolumeLow;
  faVolumeXmark = faVolumeXmark;
  faCartShopping = faCartShopping;
}
