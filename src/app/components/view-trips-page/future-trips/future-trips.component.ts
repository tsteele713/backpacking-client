import { Component, OnInit } from '@angular/core';
import { thermometer } from 'ngx-bootstrap-icons';
import { Trip } from 'src/app/models/trip.model';
import { TripService } from 'src/app/services/trip.service';

@Component({
  selector: 'ts-future-trips',
  templateUrl: './future-trips.component.html',
  styleUrls: ['./future-trips.component.less']
})
export class FutureTripsComponent implements OnInit {

  trips!: Trip[][];

  constructor(private tripService: TripService){}

  ngOnInit() {
    this.trips = this.tripService.getFutureTrips();
  }
  
}
