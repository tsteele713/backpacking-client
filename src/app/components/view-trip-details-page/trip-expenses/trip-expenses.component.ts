import { Component, Input, OnInit } from '@angular/core';
import { Trip } from 'src/app/models/trip.model';

@Component({
  selector: 'ts-trip-expenses',
  templateUrl: './trip-expenses.component.html',
  styleUrls: ['./trip-expenses.component.less']
})
export class TripExpensesComponent implements OnInit {
  

    expenses!: any[];

    ngOnInit() {

    }

}
