import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-experts-section',
  templateUrl: './experts-section.component.html',
  styleUrls: ['./experts-section.component.scss']
})
export class ExpertsSectionComponent implements OnInit {
  responsiveOptions = [];
  experts = [{
    name: 'HG Adbhut Narsimha Das',
    image: 'http://raivens.com/wp-content/uploads/2016/08/Dummy-image.jpg',
    description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. ' +
      'Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, ' +
      'when an unknown printer took a galley of type and scrambled it to make a type specimen book.',
    designation: ['Ex. Software Engineer at Syntel Pvt. Ltd.', 'ABES Alumni', 'Lifestyle Coach'],
    action_btn: 'KNOW MORE',
    action_btn_link: '/',
  }, {
    name: 'HG Adbhut Narsimha Das',
    image: 'http://raivens.com/wp-content/uploads/2016/08/Dummy-image.jpg',
    description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. ' +
      'Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, ' +
      'when an unknown printer took a galley of type and scrambled it to make a type specimen book.',
    designation: ['Ex. Software Engineer at Syntel Pvt. Ltd.', 'ABES Alumni', 'Lifestyle Coach'],
    action_btn: 'KNOW MORE',
    action_btn_link: '/',
  }, {
    name: 'HG Adbhut Narsimha Das',
    image: 'http://raivens.com/wp-content/uploads/2016/08/Dummy-image.jpg',
    description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. ' +
      'Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, ' +
      'when an unknown printer took a galley of type and scrambled it to make a type specimen book.',
    designation: ['Ex. Software Engineer at Syntel Pvt. Ltd.', 'ABES Alumni', 'Lifestyle Coach'],
    action_btn: 'KNOW MORE',
    action_btn_link: '/',
  }];

  constructor() {
    this.responsiveOptions = [
      {
        breakpoint: '1024px',
        numVisible: 3,
        numScroll: 3
      },
      {
        breakpoint: '768px',
        numVisible: 2,
        numScroll: 2
      },
      {
        breakpoint: '560px',
        numVisible: 1,
        numScroll: 1
      }
    ];
  }

  ngOnInit() {
  }

}
