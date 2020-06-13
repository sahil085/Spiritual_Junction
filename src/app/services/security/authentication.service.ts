import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {map} from 'rxjs/operators';
import {Router} from '@angular/router';
import {AppUrl} from '../../constants/app-url';
import {environment} from '../../../environments/environment';
import {UserAuthority} from '../../models/user-authority';
import {BehaviorSubject, Observable} from 'rxjs';
import {SocialLogin} from '../../models/social-login';
import {AuthService} from 'angularx-social-login';
import {AppScope} from '../../constants/app-scope';
import {CookieService} from 'ngx-cookie-service';
import {AppConst} from '../../constants/app-const';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {


  apiUrl: string = environment.apiUrl;

  constructor(private httpClient: HttpClient, private cookieService: CookieService,
              private router: Router, private authService: AuthService) {
  }


  authenticate(username, password) {
    return this.httpClient.post<UserAuthority>(`${this.apiUrl}/authenticate`, {username, password}).pipe(
      map(
        userData => {
          userData.jwtToken = 'Bearer ' + userData.jwtToken;
          userData.currentRole = userData.authorities[0];
          localStorage.setItem('currentUser', JSON.stringify(userData));
          localStorage.setItem('role', userData.authorities[0]);
          const userAuth = new UserAuthority();
          userAuth.currentRole = userData.authorities[0];
          userAuth.authorities = userData.authorities;
          userAuth.jwtToken = 'Bearer ' + userData.jwtToken;
          AppScope.setCurrentUser(userData);
          return userData;
        }
      )
    );
  }

  getAuthToken(): string {
    const cookies: {} = this.cookieService.getAll();
    return this.cookieService.get(Object.keys(cookies).find(cookieName => cookieName.endsWith(AppConst.AUTH_COOKIE_SUFFIX)));
  }

  socialLoginAuthentication(socialLoginDetails: SocialLogin) {
    return this.httpClient.post<UserAuthority>(`${this.apiUrl}/social-login`, socialLoginDetails).pipe(
      map(
        userData => {
          userData.jwtToken = 'Bearer ' + userData.jwtToken;
          userData.currentRole = userData.authorities[0];
          localStorage.setItem('currentUser', JSON.stringify(userData));
          localStorage.setItem('role', userData.authorities[0]);
          this.currentUserSubject.next(userData);
          return userData;
        }
      )
    );
  }

  currentUserValue() {
    return this.currentUserSubject.value;
  }

  public getCurrentRole(): string {
    return this.currentUserSubject.value.currentRole;
  }


  logout() {
    // remove social login
    this.authService.signOut();
    // remove oauth cookie from backend
    this.httpClient.get(this.apiUrl).subscribe();
    AppScope.setCurrentUser(new UserAuthority());
    this.router.navigateByUrl(AppUrl.LOGIN);
  }
}
