import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-features-section',
  templateUrl: './features-section.component.html',
  styleUrls: ['./features-section.component.scss']
})
export class FeaturesSectionComponent implements OnInit {
  features = [{
    title: 'Feature 1',
    description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. ' +
      'Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, ' +
      'when an unknown printer took a galley of type and scrambled it to make a type specimen book.',
    action_btn_text: 'Learn More',
    action_btn_link: '/',
    image: 'https://iyfdelhi.com/wp-content/uploads/2013/06/shutterstock_314450846.jpg',
  }, {
    title: 'Feature 2',
    description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. ' +
      'Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, ' +
      'when an unknown printer took a galley of type and scrambled it to make a type specimen book.',
    action_btn_text: 'Learn More',
    action_btn_link: '/',
    image: 'https://iyfdelhi.com/wp-content/uploads/2013/06/shutterstock_314450846.jpg',
  }];

  constructor() { }

  ngOnInit() {
  }

}
