import {Injectable} from '@angular/core';
import {HttpHandler, HttpInterceptor, HttpRequest} from '@angular/common/http';
import {AuthenticationService} from './authentication.service';

@Injectable({
  providedIn: 'root'
})
export class AuthHttpInterceptorService implements HttpInterceptor {

  constructor(private authenticationService: AuthenticationService) {
  }

  intercept(req: HttpRequest<any>, next: HttpHandler) {
    // add authorization header with jwt token if available
    if (!req.headers.get('skip')) {

      const currentUser = this.authenticationService.getAuthUserDetailsFromCookie();
      if (currentUser && currentUser.jwtToken) {
        req = req.clone({
          setHeaders: {
            Authorization: currentUser.jwtToken
          },
          setParams: {
            currentRole: currentUser.currentRole
          }
        });
      }
    }

    return next.handle(req);
  }
}
