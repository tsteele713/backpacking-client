import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { allIcons, NgxBootstrapIconsModule } from 'ngx-bootstrap-icons';
import { BsDatepickerModule } from 'ngx-bootstrap/datepicker';
import { BsDropdownConfig, BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { BsModalService, ModalModule } from 'ngx-bootstrap/modal';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowseMarketplacePageComponent } from './components/browse-marketplace-page/browse-marketplace-page.component';
import { CreateListingPageComponent } from './components/create-listing-page/create-listing-page.component';
import { CreateTripComponent } from './components/create-trip/create-trip.component';
import { DestinationComponent } from './components/create-trip/destination/destination.component';
import { NameTripComponent } from './components/create-trip/name-trip/name-trip.component';
import { TransportationModeComponent } from './components/create-trip/transportation-mode/transportation-mode.component';
import { TripDatesComponent } from './components/create-trip/trip-dates/trip-dates.component';
import { DropdownComponent } from './components/dropdown/dropdown.component';
import { ForgotPasswordPageComponent } from './components/forgot-password-page/forgot-password-page.component';
import { ForgotPasswordSuccessPageComponent } from './components/forgot-password-success-page/forgot-password-success-page.component';
import { HeaderComponent } from './components/header/header.component';
import { HomePageComponent } from './components/home-page/home-page.component';
import { LoginPageComponent } from './components/login-page/login-page.component';
import { NavigationBarComponent } from './components/navigation-bar/navigation-bar.component';
import { RegistrationPageComponent } from './components/registration-page/registration-page.component';
import { ProfilePictureComponent } from './components/view-profile-page/profile-picture/profile-picture.component';
import { ViewProfilePageComponent } from './components/view-profile-page/view-profile-page.component';
import { EndTripComponent } from './components/view-trip-details-page/end-trip/end-trip.component';
import { TripChecklistComponent } from './components/view-trip-details-page/trip-checklist/trip-checklist.component';
import { TripExpensesComponent } from './components/view-trip-details-page/trip-expenses/trip-expenses.component';
import { TripFriendsComponent } from './components/view-trip-details-page/trip-friends/trip-friends.component';
import { TripItineraryComponent } from './components/view-trip-details-page/trip-itinerary/trip-itinerary.component';
import { TripDescriptionComponent } from './components/view-trip-details-page/trip-overview/trip-description/trip-description.component';
import { TripOverviewComponent } from './components/view-trip-details-page/trip-overview/trip-overview.component';
import { ViewTripDetailsPageComponent } from './components/view-trip-details-page/view-trip-details-page.component';
import { FutureTripsComponent } from './components/view-trips-page/future-trips/future-trips.component';
import { PastTripsComponent } from './components/view-trips-page/past-trips/past-trips.component';
import { TripPreviewComponent } from './components/view-trips-page/trip-preview/trip-preview.component';
import { ViewTripsPageComponent } from './components/view-trips-page/view-trips-page.component';
import { ChecklistService } from './services/checklist.service';
import { ExpensesService } from './services/expenses.service';
import { TripService } from './services/trip.service';
import { UserProfileService } from './services/user-profile.service';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    NavigationBarComponent,
    HomePageComponent,
    CreateListingPageComponent,
    BrowseMarketplacePageComponent,
    ViewTripsPageComponent,
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
    PastTripsComponent,
    NameTripComponent,
    TripPreviewComponent,
    ViewTripDetailsPageComponent,
    TripOverviewComponent,
    TripFriendsComponent,
    TripExpensesComponent,
    TripItineraryComponent,
    TripChecklistComponent,
    EndTripComponent,
    TripDescriptionComponent

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
    BsModalService,
    TripService,
    ChecklistService,
    ExpensesService
  ],
  bootstrap: [
    AppComponent,

  ]
})
export class AppModule { }
