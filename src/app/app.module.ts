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
import { NgxBootstrapIconsModule, allIcons } from 'ngx-bootstrap-icons';
import { ModalModule, BsModalService } from 'ngx-bootstrap/modal';
import { TransportationModeComponent } from './components/trip-planning-page/transportation-mode/transportation-mode.component';
import { BsDatepickerModule } from 'ngx-bootstrap/datepicker';
import { TripDatesComponent } from './components/trip-planning-page/trip-dates/trip-dates.component';
import { DestinationComponent } from './components/trip-planning-page/destination/destination.component';
import { CreateTripComponent } from './components/create-trip/create-trip.component';
import { FutureTripsComponent } from './components/view-trips-page/future-trips/future-trips.component';
import { PastTripsComponent } from './components/view-trips-page/past-trips/past-trips.component';

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
    ProfilePictureComponent,
    TransportationModeComponent,
    TripDatesComponent,
    DestinationComponent,
    CreateTripComponent,
    FutureTripsComponent,
    PastTripsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BsDropdownModule,
    BrowserAnimationsModule,
    FormsModule,
    HttpClientModule,
    NgxBootstrapIconsModule.pick(allIcons),
    ModalModule,
    BsDatepickerModule.forRoot()
    
  ],
  providers: [
    BsDropdownConfig,
    UserProfileService,
    BsModalService
  ],
  bootstrap: [
    AppComponent,

  ]
})
export class AppModule { }
