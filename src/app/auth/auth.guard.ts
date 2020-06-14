import {Injectable} from '@angular/core';
import {ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot} from '@angular/router';
import {AuthenticationService} from '../services/security/authentication.service';
import {AppUrl} from '../constants/app-url';
import {AppScope} from '../constants/app-scope';
import {UserAuthority} from '../models/user-authority';


@Injectable({providedIn: 'root'})
export class AuthGuard implements CanActivate {

  currentUser: UserAuthority;

  constructor(private router: Router, private authService: AuthenticationService) {
    this.subscribeCurrentUserUpdate();
  }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    if (this.currentUser) {
      // authorised so return true
      return true;
    }
    // not logged in so redirect to login page with the return url
    this.router.navigate([AppUrl.LOGIN], {queryParams: {returnUrl: state.url}});
    return false;
  }

  private subscribeCurrentUserUpdate() {
    AppScope.currentUser.subscribe((user: UserAuthority) => this.currentUser = user);
  }
}
