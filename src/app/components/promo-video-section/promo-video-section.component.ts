import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-promo-video-section',
  templateUrl: './promo-video-section.component.html',
  styleUrls: ['./promo-video-section.component.scss']
})
export class PromoVideoSectionComponent implements OnInit {
  @Input() text: string;
  @Input() title: string;
  @Input() actionBtnLink: string;
  @Input() videoLink: string;

  constructor() { }

  ngOnInit() {
    console.log('videoLink', this.videoLink);
  }

}
