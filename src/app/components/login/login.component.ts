import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {AuthenticationService} from '../../services/security/authentication.service';
import {AuthService, FacebookLoginProvider, GoogleLoginProvider, SocialUser} from 'angularx-social-login';
import {SocialLogin} from '../../models/social-login';
import {AppScope} from '../../constants/app-scope';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  email: string;
  password: string;


  constructor(private router: Router, private route: ActivatedRoute,
              private appAuthService: AuthenticationService, private authService: AuthService) {
  }

  ngOnInit() {
  }

  login() {
    this.appAuthService.authenticate(this.email, this.password).subscribe(
      (response) => {
        this.appAuthService.setAuthDetailsInCookie(response);
        AppScope.setCurrentUser(response);
        window.location.href = '/';
      }
      , (error) => {
        console.log(error);
      }
    );
  }

  signInWithGoogle(): void {
    this.authService.signIn(GoogleLoginProvider.PROVIDER_ID).then(socialusers => {
      this.socialLogin(socialusers);
    });
  }

  signInWithFB(): void {
    this.authService.signIn(FacebookLoginProvider.PROVIDER_ID).then(socialusers => {
      this.socialLogin(socialusers);
    });
  }

  socialLogin(socialUserDetails: SocialUser) {
    const socialLoginDetails = new SocialLogin();
    socialLoginDetails.email = socialUserDetails.email;
    socialLoginDetails.name = socialUserDetails.name;
    socialLoginDetails.photoUrl = socialUserDetails.photoUrl;
    socialLoginDetails.provider = socialUserDetails.provider;
    this.appAuthService.socialLoginAuthentication(socialLoginDetails).subscribe(
      (response) => {
        this.appAuthService.setAuthDetailsInCookie(response);
        AppScope.setCurrentUser(response);
        window.location.href = '/';
      },
      (error) => {
        console.log(error);
      }
    );
  }

}
