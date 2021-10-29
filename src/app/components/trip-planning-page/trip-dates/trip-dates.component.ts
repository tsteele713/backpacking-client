import { Component, EventEmitter, OnChanges, Output, SimpleChanges, TemplateRef } from '@angular/core';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { OnChange } from 'ngx-bootstrap/utils';

@Component({
  selector: 'ts-trip-dates',
  templateUrl: './trip-dates.component.html',
  styleUrls: ['./trip-dates.component.less', '../../../../../node_modules/ngx-bootstrap/datepicker/bs-datepicker.css']
})
export class TripDatesComponent {

    bsValue = new Date();
    bsRangeValue: Date[];
    maxDate = new Date();
    minDate = new Date();
    startDate: string = '';
    @Output() selectedDate = new EventEmitter<string>();
 
    constructor() {
       this.minDate.setDate(this.minDate.getDate());
       this.maxDate.setDate(this.maxDate.getDate() + 7);
       this.bsRangeValue = [this.bsValue, this.maxDate];
    }


    emitChange() {
        this.selectedDate.emit(this.startDate);
    }



}
