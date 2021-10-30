import { Component, Input, OnInit } from '@angular/core';
import { Trip } from 'src/app/models/trip.model';

@Component({
  selector: 'ts-trip-preview',
  templateUrl: './trip-preview.component.html',
  styleUrls: ['./trip-preview.component.less']
})
export class TripPreviewComponent implements OnInit {
  
    @Input() trip!: Trip;
    image!: string;
    returnDate!: string;

    ngOnInit() {
        this.image = this.trip.initialTransportationType === 'Flying' ? 'assets/images/airplane.svg' : 'assets/images/car.svg';
        this.returnDate = this.trip.returnDate === undefined ? '' : 'Return Date: ' + this.trip.returnDate

    }

}
