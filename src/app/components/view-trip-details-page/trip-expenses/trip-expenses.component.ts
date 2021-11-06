import { ChangeDetectorRef, Component, Input, OnInit, TemplateRef } from '@angular/core';
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
    displayReceipts: BehaviorSubject<any[]> = new BehaviorSubject<any[]>([]);;
    expenseName!: string;
    cost: number | undefined;
    receiptPhoto!: string | ArrayBuffer | null;
    receipts: any[] = [];
    expenseType!: 'Personal' | 'Group' | '';
    modalOptions: ModalOptions = {
      backdrop : 'static',
      keyboard : false
    }

    constructor(
      private expensesService: ExpensesService,
      private modalService: BsModalService,
      private changeDetectorRef: ChangeDetectorRef
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

  removeReceipt(index: number) {
    this.receipts.splice(index, 1);
    this.displayReceipts.next(this.receipts);
  }

  readUrl(event:any) {
    if (event.target.files && event.target.files[0]) {
      var reader = new FileReader();
  
      reader.onload = (event: ProgressEvent) => {
        
        this.receipts.push((<FileReader>event.target).result);
        this.displayReceipts.next(this.receipts);
        this.changeDetectorRef.detectChanges();
      }
  
      reader.readAsDataURL(event.target.files[0]);
    }
  }

}
