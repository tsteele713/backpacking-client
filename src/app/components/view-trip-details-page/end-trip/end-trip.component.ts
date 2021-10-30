import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Trip } from 'src/app/models/trip.model';

@Component({
  selector: 'ts-end-trip',
  templateUrl: './end-trip.component.html',
  styleUrls: ['./end-trip.component.less']
})
export class EndTripComponent implements OnInit {
  
    @Input() trip!: Trip;

    constructor(private router: Router){}

    ngOnInit() {

    }

    endTrip() {
        this.router.navigate(['viewTrips']);
    }
}
