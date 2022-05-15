import { Component, OnInit } from '@angular/core';

// Iconos - FontAwesome
import {
  faEnvelope,
  faLock,
  faCheck
} from '@fortawesome/free-solid-svg-icons';

import { faGooglePlus } from '@fortawesome/free-brands-svg-icons';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {}

  // Iconos
  faEnvelope = faEnvelope;
  faLock = faLock;
  faCheck = faCheck;
  faGooglePlus = faGooglePlus;
}
