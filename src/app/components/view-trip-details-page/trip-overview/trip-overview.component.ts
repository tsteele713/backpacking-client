import { Component, Input, OnInit } from '@angular/core';
import { Trip } from 'src/app/models/trip.model';

@Component({
  selector: 'ts-trip-overview',
  templateUrl: './trip-overview.component.html',
  styleUrls: ['./trip-overview.component.less']
})
export class TripOverviewComponent implements OnInit {
  
    @Input() trip!: Trip;
    image!: string;
    returnDate!: string;

    ngOnInit() {
        this.image = this.trip.initialTransportationType === 'Flying' ? 'assets/images/airplane.svg' : 'assets/images/car.svg';
        this.returnDate = this.trip.returnDate === undefined ? '' : 'Return Date: ' + this.trip.returnDate

    }

}
