import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  activities = [{
    name: 'CAMPS',
    image: 'https://iyfdelhi.com/wp-content/uploads/2013/06/Nature-51.jpg',
    action_btn: 'KNOW MORE',
    action_btn_link: '',
  }, {
    name: 'SCHOOL PROGRAMS',
    image: 'https://iyfdelhi.com/wp-content/uploads/2013/06/kids-leaving-schoolpbr.jpg',
    action_btn: 'KNOW MORE',
    action_btn_link: '',
  }, {
    name: 'COLLEGE PROGRAMS',
    image: 'https://iyfdelhi.com/wp-content/uploads/2013/06/shutterstock_314450846.jpg',
    action_btn: 'KNOW MORE',
    action_btn_link: '',
  }, {
    name: 'YOUTH FESTS',
    image: 'https://iyfdelhi.com/wp-content/uploads/2013/06/shutterstock_612941954.jpg',
    action_btn: 'KNOW MORE',
    action_btn_link: '',
  }];

  constructor() { }

  ngOnInit() {
  }

}
