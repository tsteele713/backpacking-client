import { Component, Input, OnInit, TemplateRef } from '@angular/core';
import { thermometer } from 'ngx-bootstrap-icons';
import { BsModalRef, BsModalService, ModalOptions } from 'ngx-bootstrap/modal';
import { BehaviorSubject } from 'rxjs';
import { Expenses, TripExpenses } from 'src/app/models/expenses.model';
import { Trip } from 'src/app/models/trip.model';
import { ExpensesService } from 'src/app/services/expenses.service';

@Component({
  selector: 'ts-trip-expenses',
  templateUrl: './trip-expenses.component.html',
  styleUrls: ['./trip-expenses.component.less']
})
export class TripExpensesComponent implements OnInit {
  

    expenses!: TripExpenses;
    modalRef!: BsModalRef;
    displayTransportation!: BehaviorSubject<boolean>;
    expenseName!: string;
    cost: number | undefined;
    expenseType!: 'Personal' | 'Group' | '';
    modalOptions: ModalOptions = {
      backdrop : 'static',
      keyboard : false
    }

    constructor(
      private expensesService: ExpensesService,
      private modalService: BsModalService,
      ){}

    ngOnInit() {
      this.expenses = this.expensesService.getExpenses();
      this.expenseType = '';
    }

    openModal(template: TemplateRef<any>) {
      this.modalRef = this.modalService.show(template, this.modalOptions);
      this.displayTransportation.next(true);
   }

   close() {
    this.modalRef.hide();
    this.expenseType = '';
    this.cost = undefined;
    this.expenseName = '';
  }

  addExpense() {
    let expense: Expenses = {
      type: this.expenseType,
      amount: this.cost,
      description: this.expenseName,
      expenseCreator: 'Tyler Steele'
    }
    this.expenses.expenses.push(expense);
    this.close();
    this.modalRef.hide();
  }

}
