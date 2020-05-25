import { Component, OnInit } from '@angular/core';
import { AppUrl } from '../../constants/app-url';

@Component({
  selector: 'app-not-found-page',
  templateUrl: './not-found-page.component.html',
  styleUrls: ['./not-found-page.component.scss']
})
export class NotFoundPageComponent implements OnInit {
  HOME_PAGE_URL = AppUrl.HOME_PAGE;

  constructor() { }

  ngOnInit() {
  }

}
