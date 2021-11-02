import { Component, Input, OnInit } from '@angular/core';
import { TripExpenses } from 'src/app/models/expenses.model';
import { Trip } from 'src/app/models/trip.model';
import { ExpensesService } from 'src/app/services/expenses.service';

@Component({
  selector: 'ts-trip-expenses',
  templateUrl: './trip-expenses.component.html',
  styleUrls: ['./trip-expenses.component.less']
})
export class TripExpensesComponent implements OnInit {
  

    expenses!: TripExpenses;

    constructor(private expensesService: ExpensesService){}

    ngOnInit() {
      this.expenses = this.expensesService.getExpenses()
    }

}
