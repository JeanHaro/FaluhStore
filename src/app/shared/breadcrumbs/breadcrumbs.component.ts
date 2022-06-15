import { Component, OnInit } from '@angular/core';

import { 
  faAngleRight
} from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-breadcrumbs',
  templateUrl: './breadcrumbs.component.html',
  styleUrls: ['./breadcrumbs.component.scss']
})
export class BreadcrumbsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  // Iconos
  faAngleRight = faAngleRight;
}
