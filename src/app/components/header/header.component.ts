import {Component, OnInit} from '@angular/core';
import {AppUrl} from '../../constants/app-url';
import {BaseComponent} from '../base/base.component';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent extends BaseComponent implements OnInit {
  AppUrl = AppUrl;

  constructor() {
    super();
  }

  ngOnInit() {
    console.log(this.currentUser);
  }

  logoutUser() {
    this.logout();
  }

}
