import { Component, OnInit } from '@angular/core';
import {AppUrl} from '../../constants/app-url';

@Component({
  selector: 'app-view-course-page',
  templateUrl: './view-course-page.component.html',
  styleUrls: ['./view-course-page.component.scss']
})
export class ViewCoursePageComponent implements OnInit {

  AppUrl = AppUrl;

  responsiveOptions = [
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

  imageList = [
    {src: 'https://iyfdelhi.com/wp-content/uploads/2020/05/Practical-Spirituality.jpg'},
    {src: 'https://iyfdelhi.com/wp-content/uploads/2020/03/Viplava-Temp.jpg'},
    {src: 'https://iyfdelhi.com/wp-content/uploads/2020/05/Practical-Spirituality.jpg'},
    {src: 'https://iyfdelhi.com/wp-content/uploads/2020/05/Practical-Spirituality.jpg'},
  ];

  courses = [
    {
      id: 1,
      thumbnail: 'https://iyfdelhi.com/wp-content/uploads/2020/05/Practical-Spirituality.jpg',
      title: 'Lorem Ipsum',
      description: 'Lorem ipsum dolor sit amet, elitr hendrerit eu sed, ea admodum constituam sea. Inimicus perpetua id mei, an vim nemore efficiendi, vix te malis offendit. Nam option reformidans id, at accumsan omittantur vix. Ex prima minim consequat sea, et est purto quas causae.\n',
    },
    {
      id: 2,
      thumbnail: 'https://iyfdelhi.com/wp-content/uploads/2020/05/Practical-Spirituality.jpg',
      title: 'Lorem Ipsum',
      description: 'Lorem ipsum dolor sit amet, elitr hendrerit eu sed, ea admodum constituam sea. Inimicus perpetua id mei, an vim nemore efficiendi, vix te malis offendit. Nam option reformidans id, at accumsan omittantur vix. Ex prima minim consequat sea, et est purto quas causae.\n',
    },
    {
      id: 3,
      thumbnail: 'https://iyfdelhi.com/wp-content/uploads/2020/05/Practical-Spirituality.jpg',
      title: 'Lorem Ipsum',
      description: 'Lorem ipsum dolor sit amet, elitr hendrerit eu sed, ea admodum constituam sea. Inimicus perpetua id mei, an vim nemore efficiendi, vix te malis offendit. Nam option reformidans id, at accumsan omittantur vix. Ex prima minim consequat sea, et est purto quas causae.\n',
    },
    {
      id: 4,
      thumbnail: 'https://iyfdelhi.com/wp-content/uploads/2020/05/Practical-Spirituality.jpg',
      title: 'Lorem Ipsum',
      description: 'Lorem ipsum dolor sit amet, elitr hendrerit eu sed, ea admodum constituam sea. Inimicus perpetua id mei, an vim nemore efficiendi, vix te malis offendit. Nam option reformidans id, at accumsan omittantur vix. Ex prima minim consequat sea, et est purto quas causae.\n',
    }
  ];

  constructor() { }

  ngOnInit() {
  }

}
