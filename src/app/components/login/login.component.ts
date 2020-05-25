import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {AuthenticationService} from '../../services/security/authentication.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  email: string;
  password: string;


  constructor(private router: Router, private route: ActivatedRoute,
              private authService: AuthenticationService) {
  }

  ngOnInit() {
  }

  login() {
    console.log(this.email + this.password);
    this.authService.authenticate(this.email, this.password).subscribe(response => {
      this.router.navigateByUrl('/');
    });
  }

}
