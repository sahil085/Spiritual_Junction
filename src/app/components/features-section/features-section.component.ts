import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-features-section',
  templateUrl: './features-section.component.html',
  styleUrls: ['./features-section.component.scss']
})
export class FeaturesSectionComponent implements OnInit {
  features = [{
    title: 'Not just courses!',
    description: 'Systematic Practical Courses on Bhagavad Gita, along with Quizzes and Online Certification. And that too not just offline but online, right upto your device. Access the courses which tell you how to Grow through LIFE, rather going through Life.',
    action_btn_text: 'Learn More',
    action_btn_link: '/',
    image: 'https://iyfdelhi.com/wp-content/uploads/2013/06/shutterstock_314450846.jpg',
  }, {
    title: 'Personal Mentors',
    description: 'If you don\'t have good relationship in your life, it will be very difficult to make progress. Unfortunately, many times that kind of relationship does not exist, because we are not willing to be humble. We are not willing to look for superior qualities in others. We are not willing to accept that "somebody may actually have something that they can offer me in my spiritual life." And here comes our experts for the rescue.',
    action_btn_text: 'Learn More',
    action_btn_link: '/',
    image: 'https://tedideas.files.wordpress.com/2018/09/featured_art_mentor_istock.jpg',
  }, {
    title: 'Managing your Lifestyle',
    description: 'ISKCON Youth Forum offers a nourishing package of lifestyle management to keep the body and soul in good shape and provides a meaningful purpose to students\' academic pursuits. Inevitably, the younger generation blossoms to become an asset to the society.',
    action_btn_text: 'Learn More',
    action_btn_link: '/',
    image: 'https://iyfdelhi.com/wp-content/uploads/2020/05/01-580x380_c.jpg',
  }, {
    title: 'Festivals that nourish the soul',
    description: 'Who doesn\'t likes festivals? Here in IYF, we offer not just the food or music, we share the bliss, the real happiness everyone is searchig for. What are you waiting for? Connect with us and see every day as a festival.',
    action_btn_text: 'Learn More',
    action_btn_link: '/',
    image: 'https://iyfdelhi.com/wp-content/uploads/2013/06/shutterstock_612941954.jpg',
  }];

  constructor() {
  }

  ngOnInit() {
  }

}
