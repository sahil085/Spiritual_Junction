import {Component, OnInit} from '@angular/core';
import {AppScope} from '../../constants/app-scope';
import {UserAuthority} from '../../models/user-authority';

@Component({
  selector: 'app-base',
  templateUrl: './base.component.html',
  styleUrls: ['./base.component.scss']
})
export class BaseComponent implements OnInit {

  currentUser: UserAuthority;

  constructor() {
  }

  ngOnInit() {
    this.subscribeCurrentUserUpdate();
  }

  private subscribeCurrentUserUpdate() {
    AppScope.currentUser
      .subscribe((user: UserAuthority) => {
        this.currentUser = user;
      });
  }


}
