import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { UserProfileService } from 'src/app/services/user-profile.service';

@Component({
  selector: 'ts-registration-page',
  templateUrl: './registration-page.component.html',
  styleUrls: ['./registration-page.component.less']
})
export class RegistrationPageComponent {

    firstName!: string;
    lastName!: string;
    emailAddress!: string;
    password!: string;
    confirmPassword!: string;
  
    constructor(
      private router: Router,
      private userProfileService: UserProfileService) {}

    submitRegistration() {

      let request = {
        firstName: this.firstName,
        lastName: this.lastName,
        emailAddress: this.emailAddress,
        password: this.password,
        confirmPassword: this.confirmPassword
      }

      this.userProfileService.createProfile(request).subscribe(() =>{
        this.router.navigate(['viewProfile']);
      });

        //
    }

}
