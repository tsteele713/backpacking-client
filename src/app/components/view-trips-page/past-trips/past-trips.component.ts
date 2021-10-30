import { Component, OnInit } from '@angular/core';
import { Trip } from 'src/app/models/trip.model';
import { TripService } from 'src/app/services/trip.service';

@Component({
  selector: 'ts-past-trips',
  templateUrl: './past-trips.component.html',
  styleUrls: ['./past-trips.component.less']
})
export class PastTripsComponent  implements OnInit {

    trips!: Trip[][];
  
    constructor(private tripService: TripService){}
  
    ngOnInit() {
        this.trips = this.tripService.getPastTrips();
        var i,j, chunk = 3;

    }
}