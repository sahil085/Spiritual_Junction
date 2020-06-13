import {BehaviorSubject, Observable} from 'rxjs';
import {UserAuthority} from '../models/user-authority';

export class AppScope {

  private static $currentUser = new BehaviorSubject<UserAuthority>(new UserAuthority());

  static get currentUser(): Observable<UserAuthority> {
    return this.$currentUser.asObservable();
  }
  static setCurrentUser(value: UserAuthority) {
    this.$currentUser.next(value);
  }
}
