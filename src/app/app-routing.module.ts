import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BrowseMarketplacePageComponent } from './components/browse-marketplace-page/browse-marketplace-page.component';
import { CreateListingPageComponent } from './components/create-listing-page/create-listing-page.component';
import { ForgotPasswordPageComponent } from './components/forgot-password-page/forgot-password-page.component';
import { ForgotPasswordSuccessPageComponent } from './components/forgot-password-success-page/forgot-password-success-page.component';
import { HomePageComponent } from './components/home-page/home-page.component';
import { LoginPageComponent } from './components/login-page/login-page.component';
import { RegistrationPageComponent } from './components/registration-page/registration-page.component';
import { TripPlanningPageComponent } from './components/trip-planning-page/trip-planning-page.component';
import { ViewProfilePageComponent } from './components/view-profile-page/view-profile-page.component';
import { ViewTripsPageComponent } from './components/view-trips-page/view-trips-page.component';

const routes: Routes = [
   {path:'home', component:HomePageComponent},
   {path:'createListing', component:CreateListingPageComponent},
   {path:'', component:HomePageComponent},
   {path:'browseMarketplace', component:BrowseMarketplacePageComponent},
   {path:'planTrip', component:TripPlanningPageComponent},
   {path:'viewTrips', component:ViewTripsPageComponent},
   {path:'viewProfile', component:ViewProfilePageComponent},
   {path:'login', component:LoginPageComponent},
   {path:'registration', component:RegistrationPageComponent},
   {path:'forgotPassword', component:ForgotPasswordPageComponent},
   {path:'resetPasswordSuccess', component:ForgotPasswordSuccessPageComponent}
];
@NgModule({ 
   imports: [
      RouterModule.forRoot(routes)
   ],
   exports: [RouterModule] 
}) 
export class AppRoutingModule { }