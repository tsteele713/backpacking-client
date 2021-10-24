import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'ts-forgot-password-page',
  templateUrl: './forgot-password-page.component.html',
  styleUrls: ['./forgot-password-page.component.less']
})
export class ForgotPasswordPageComponent {
  
  constructor(private router: Router) {}

  submitForgotPassword() {
    this.router.navigate(['resetPasswordSuccess']);
  }


}
