import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'ts-name-trip',
  templateUrl: './name-trip.component.html',
  styleUrls: ['./name-trip.component.less']
})
export class NameTripComponent {

    bsValue = new Date();
    bsRangeValue: Date[];
    maxDate = new Date();
    minDate = new Date();
    startDate: string = '';
    @Output() selectedName = new EventEmitter<string>();
 
    constructor() {
       this.minDate.setDate(this.minDate.getDate());
       this.maxDate.setDate(this.maxDate.getDate() + 7);
       this.bsRangeValue = [this.bsValue, this.maxDate];
    }


    emitChange() {
        this.selectedName.emit(this.startDate);
    }



}
