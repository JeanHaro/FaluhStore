import { Component, OnInit } from '@angular/core';

// Iconos - FontAwesome
import {
  faEnvelope,
  faLock,
  faCheck,
  faUser
} from '@fortawesome/free-solid-svg-icons';

import { faGooglePlus } from '@fortawesome/free-brands-svg-icons';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  // Iconos
  faEnvelope = faEnvelope;
  faLock = faLock;
  faCheck = faCheck;
  faGooglePlus = faGooglePlus;
  faUser = faUser;
}
