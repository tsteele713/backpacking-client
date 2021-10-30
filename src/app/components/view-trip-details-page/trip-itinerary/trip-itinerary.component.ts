import { Component, OnInit } from '@angular/core';
import { UserProfileService } from 'src/app/services/user-profile.service';

@Component({
  selector: 'ts-trip-itinerary',
  templateUrl: './trip-itinerary.component.html',
  styleUrls: ['./trip-itinerary.component.less']
})
export class TripItineraryComponent implements OnInit {
  
    itineraryItems: any[] = [];

    ngOnInit() {

    }
}
