import { Component, OnInit } from '@angular/core';
import {AppUrl} from '../../constants/app-url';

@Component({
  selector: 'app-festivals-page',
  templateUrl: './festivals-page.component.html',
  styleUrls: ['./festivals-page.component.scss']
})
export class FestivalsPageComponent implements OnInit {

  festivals = [{
    name: 'UDGAAR',
    desc: 'Lorem ipsum, or lipsum as it is sometimes known, is dummy text used in laying out print, graphic or web designs. The passage is attributed to an unknown typesetter in the 15th century who is thought to have scrambled parts of Cicero\'s De Finibus Bonorum et Malorum for use in a type specimen book.',
    image: 'https://iyfdelhi.com/wp-content/uploads/2018/07/2.jpg',
    inner_link: '',
    outer_link: 'https://udgaar.in'
  }, {
    name: 'VIPLAVA',
    desc: 'Lorem ipsum, or lipsum as it is sometimes known, is dummy text used in laying out print, graphic or web designs. The passage is attributed to an unknown typesetter in the 15th century who is thought to have scrambled parts of Cicero\'s De Finibus Bonorum et Malorum for use in a type specimen book.',
    image: 'https://iyfdelhi.com/wp-content/uploads/2018/07/2.jpg',
    inner_link: '',
    outer_link: 'https://www.facebook.com/pg/IYFGhaziabad/photos/?tab=album&album_id=164008645128374'
  }, {
    name: 'Mega Youth Fest',
    desc: 'Lorem ipsum, or lipsum as it is sometimes known, is dummy text used in laying out print, graphic or web designs. The passage is attributed to an unknown typesetter in the 15th century who is thought to have scrambled parts of Cicero\'s De Finibus Bonorum et Malorum for use in a type specimen book.',
    image: 'https://iyfdelhi.com/wp-content/uploads/2018/07/2.jpg',
    inner_link: '',
    outer_link: 'https://www.facebook.com/pg/IYFGhaziabad/photos/?tab=album&album_id=128262368703002'
  }];

  constructor() { }

  ngOnInit() {
  }

}
