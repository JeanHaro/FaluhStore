import { Component, OnInit } from '@angular/core';

// Iconos - FontAwesome
import { 
  faPerson,
  faPersonDress,
  faChild,
  faBaby,
  faAngleRight
} from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  // Iconos
  faPerson = faPerson;
  faPersonDress = faPersonDress;
  faChild = faChild;
  faBaby = faBaby;
  faAngleRight = faAngleRight;
}
