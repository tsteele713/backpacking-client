import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { HomePageComponent } from './components/home-page/home-page.component';
import { NavigationBarComponent } from './components/navigation-bar/navigation-bar.component';
import { AppRoutingModule } from './app-routing.module'; 
import { CreateListingPageComponent } from './components/create-listing-page/create-listing-page.component';
import { BrowseMarketplacePageComponent } from './components/browse-marketplace-page/browse-marketplace-page.component';
import { ViewTripsPageComponent } from './components/view-trips-page/view-trips-page.component';
import { TripPlanningPageComponent } from './components/trip-planning-page/trip-planning-page.component';
import { ViewProfilePageComponent } from './components/view-profile-page/view-profile-page.component';
import { LoginPageComponent } from './components/login-page/login-page.component';
import { BsDropdownModule,BsDropdownConfig } from 'ngx-bootstrap/dropdown';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DropdownComponent } from './components/dropdown/dropdown.component';
import { FormsModule } from '@angular/forms';
import { RegistrationPageComponent } from './components/registration-page/registration-page.component';
import { ForgotPasswordPageComponent } from './components/forgot-password-page/forgot-password-page.component';
import { ForgotPasswordSuccessPageComponent } from './components/forgot-password-success-page/forgot-password-success-page.component';
import { ProfilePictureComponent } from './components/view-profile-page/profile-picture/profile-picture.component';
import { UserProfileService } from './services/user-profile.service';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    NavigationBarComponent,
    HomePageComponent,
    CreateListingPageComponent,
    BrowseMarketplacePageComponent,
    ViewTripsPageComponent,
    TripPlanningPageComponent,
    ViewProfilePageComponent,
    LoginPageComponent,
    DropdownComponent,
    RegistrationPageComponent,
    ForgotPasswordPageComponent,
    ForgotPasswordSuccessPageComponent,
    ProfilePictureComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BsDropdownModule,
    BrowserAnimationsModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [
    BsDropdownConfig,
    UserProfileService
  ],
  bootstrap: [
    AppComponent,

  ]
})
export class AppModule { }
