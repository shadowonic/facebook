import { Component, OnInit } from '@angular/core';
import { AuthService } from '@services';

import {
  FacebookService,
  LoginResponse,
  LoginOptions,
  UIResponse,
  UIParams,
  FBVideoComponent
} from 'ngx-facebook';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  constructor(private service: AuthService) {}
  ngOnInit() {
    this.service.login();
  }
}
