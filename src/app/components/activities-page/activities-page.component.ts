import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-activities-page',
  templateUrl: './activities-page.component.html',
  styleUrls: ['./activities-page.component.scss']
})
export class ActivitiesPageComponent implements OnInit {
  activities = [{
    name: 'CAMPS',
    image: 'https://iyfdelhi.com/wp-content/uploads/2013/06/Nature-51.jpg',
    description: 'These excursions and retreats are blend of educational thought provoking discussions ' +
      'and joyful experience of connecting with nature',
    action_btn: 'KNOW MORE',
    action_btn_link: '',
  }, {
    name: 'SCHOOL PROGRAMS',
    image: 'https://iyfdelhi.com/wp-content/uploads/2013/06/kids-leaving-schoolpbr.jpg',
    description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.',
    action_btn: 'KNOW MORE',
    action_btn_link: '',
  }, {
    name: 'COLLEGE PROGRAMS',
    image: 'https://iyfdelhi.com/wp-content/uploads/2013/06/shutterstock_314450846.jpg',
    description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.',
    action_btn: 'KNOW MORE',
    action_btn_link: '',
  }, {
    name: 'YOUTH FESTS',
    image: 'https://iyfdelhi.com/wp-content/uploads/2013/06/shutterstock_612941954.jpg',
    description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.',
    action_btn: 'KNOW MORE',
    action_btn_link: '',
  }];

  constructor() {
  }

  ngOnInit() {
  }

}
