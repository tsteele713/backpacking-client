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
    DropdownComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BsDropdownModule,
    BrowserAnimationsModule
  ],
  providers: [
    BsDropdownConfig
  ],
  bootstrap: [
    AppComponent,

  ]
})
export class AppModule { }
