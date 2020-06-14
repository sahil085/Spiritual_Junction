import {Component, Injector, OnInit} from '@angular/core';
import {AppScope} from '../../constants/app-scope';
import {UserAuthority} from '../../models/user-authority';
import {AuthenticationService} from '../../services/security/authentication.service';
import {ServiceLocator} from '../../models/service-locator';

@Component({
  selector: 'app-base',
  templateUrl: './base.component.html',
  styleUrls: ['./base.component.scss']
})
export class BaseComponent implements OnInit {

  currentUser: UserAuthority;
  private authService: AuthenticationService;

  constructor() {
    this.authService = ServiceLocator.injector.get(AuthenticationService);
    this.getCurrentUserFromCookie();

  }

  ngOnInit() {
  }

  private subscribeCurrentUserUpdate() {
    AppScope.currentUser
      .subscribe((user: UserAuthority) => {
        this.currentUser = user;
      });
  }

  private getCurrentUserFromCookie() {
    const user = this.authService.getAuthUserDetailsFromCookie();
    if (user) {
      AppScope.setCurrentUser(user);
      this.subscribeCurrentUserUpdate();
    }
  }

  logout() {
    this.authService.logout();
  }


}
