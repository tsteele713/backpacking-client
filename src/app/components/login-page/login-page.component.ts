import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'ts-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.less']
})
export class LoginPageComponent {
  
  constructor(private router: Router) {}

  login() {
    this.router.navigate(['viewProfile']);
  }
}
