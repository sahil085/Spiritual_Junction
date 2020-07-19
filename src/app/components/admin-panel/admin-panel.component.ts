import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-admin-panel',
  templateUrl: './admin-panel.component.html',
  styleUrls: ['./admin-panel.component.scss']
})
export class AdminPanelComponent implements OnInit {

  constructor() { }

  ngOnInit() {

    document.querySelector('.fixed-top').classList.add('d-none')
    document.querySelector('#footer').classList.add('d-none')
  }


}
