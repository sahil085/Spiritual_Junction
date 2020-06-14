import { Component, OnInit } from '@angular/core';
import { AppUrl } from '../../constants/app-url';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  AppUrl = AppUrl;

  constructor() { }

  ngOnInit() {
  }

}
