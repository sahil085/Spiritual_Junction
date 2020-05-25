import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {map} from 'rxjs/operators';
import {Router} from '@angular/router';
import {AppUrl} from '../../constants/app-url';
import {environment} from '../../../environments/environment';
import {UserAuthority} from '../../models/user-authority';
import {BehaviorSubject, Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  private currentUserSubject: BehaviorSubject<UserAuthority>;
  public currentUser: Observable<UserAuthority>;

  apiUrl: string = environment.apiUrl;

  constructor(private httpClient: HttpClient,
              private router: Router) {
    this.currentUserSubject = new BehaviorSubject<UserAuthority>(JSON.parse(localStorage.getItem('currentUser')));
    this.currentUser = this.currentUserSubject.asObservable();
  }


  authenticate(username, password) {
    return this.httpClient.post<UserAuthority>(`${this.apiUrl}/authenticate`, {username, password}).pipe(
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
    localStorage.removeItem('currentUser');
    localStorage.removeItem('role');
    this.currentUserSubject.next(null);
    this.router.navigateByUrl(AppUrl.LOGIN);
  }
}
