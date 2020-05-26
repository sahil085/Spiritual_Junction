import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-course-carousel',
  templateUrl: './course-carousel.component.html',
  styleUrls: ['./course-carousel.component.scss']
})
export class CourseCarouselComponent implements OnInit {

  @Input() courseType: string;
  courses = [{
    name: 'Course 1',
    image: 'http://raivens.com/wp-content/uploads/2016/08/Dummy-image.jpg',
    description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. ' +
      'Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, ' +
      'when an unknown printer took a galley of type and scrambled it to make a type specimen book.',
    designation: ['Ex. Software Engineer at Syntel Pvt. Ltd.', 'ABES Alumni', 'Lifestyle Coach'],
    action_btn: 'KNOW MORE',
    action_btn_link: '/',
  }, {
    name: 'Course 2',
    image: 'http://raivens.com/wp-content/uploads/2016/08/Dummy-image.jpg',
    description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. ' +
      'Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, ' +
      'when an unknown printer took a galley of type and scrambled it to make a type specimen book.',
    designation: ['Ex. Software Engineer at Syntel Pvt. Ltd.', 'ABES Alumni', 'Lifestyle Coach'],
    action_btn: 'KNOW MORE',
    action_btn_link: '/',
  }, {
    name: 'Course 3',
    image: 'http://raivens.com/wp-content/uploads/2016/08/Dummy-image.jpg',
    description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. ' +
      'Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, ' +
      'when an unknown printer took a galley of type and scrambled it to make a type specimen book.',
    designation: ['Ex. Software Engineer at Syntel Pvt. Ltd.', 'ABES Alumni', 'Lifestyle Coach'],
    action_btn: 'KNOW MORE',
    action_btn_link: '/',
  }];
  constructor() {
  }

  ngOnInit() {
  }

}
