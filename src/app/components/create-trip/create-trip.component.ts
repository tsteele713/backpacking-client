import { Component, EventEmitter, OnInit, Output, TemplateRef } from '@angular/core';
import { Router } from '@angular/router';
import { BsModalRef, BsModalService, ModalOptions } from 'ngx-bootstrap/modal';
import { BehaviorSubject } from 'rxjs';

@Component({
  selector: 'ts-create-trip',
  templateUrl: './create-trip.component.html',
  styleUrls: ['./create-trip.component.less']
})
export class CreateTripComponent implements OnInit {
  
    modalRef!: BsModalRef;
    displayTransportation!: BehaviorSubject<boolean>;
    bsValue = new Date();
    minDate = new Date();
    activeState!: BehaviorSubject<string>;
    selectedPark!:BehaviorSubject<string>;
    selectedTransportation!:BehaviorSubject<string>;
    selectedDate!:BehaviorSubject<string>;
    selectedName!:BehaviorSubject<string>;
    modalOptions: ModalOptions = {
      backdrop : 'static',
      keyboard : false
    }
  
  
    constructor(
      private modalService: BsModalService,
      private router: Router
      ) {}
  
    ngOnInit() {
      
      this.activeState = new BehaviorSubject<string>('startDate');
      this.displayTransportation = new BehaviorSubject<boolean>(false);
      this.minDate.setDate(this.minDate.getDate() - 1);
      this.selectedPark = new BehaviorSubject<string>('');
      this.selectedTransportation = new BehaviorSubject<string>('');
      this.selectedDate = new BehaviorSubject<string>('');
      this.selectedName = new BehaviorSubject<string>('');
    }
  
    openModal(template: TemplateRef<any>) {
       this.modalRef = this.modalService.show(template, this.modalOptions);
       this.displayTransportation.next(true);
    }
  
    close() {
      this.modalRef.hide();
      this.activeState.next('name');
      this.selectedPark.next('');
      this.selectedTransportation.next('');
    }
  
    switchState() {
      if (this.activeState.getValue() === 'name') {
        this.activeState.next('startDate');
      } else if (this.activeState.getValue() === 'startDate') {
        this.activeState.next('destination');
      } else if (this.activeState.getValue() === 'destination'){
        this.activeState.next('transportation');
      }
    }
  
    createTrip() {
      alert('Date: ' + this.selectedDate.getValue() + ' Location: ' + this.selectedPark.getValue() + ' transportation: ' + this.selectedTransportation.getValue());
      this.close();
      this.router.navigate(['viewProfile']);
    }
  
    reverseState() {
      if (this.activeState.getValue() === 'transportation') {
        this.activeState.next('destination');
      } else if (this.activeState.getValue() === 'destination'){
        this.activeState.next('startDate');
      }else if (this.activeState.getValue() === 'startDate'){
        this.activeState.next('name');
      }
    }
  
    setPark(park: string) {
      this.selectedPark.next(park);
    }
  
    setTransportation(transportation: string) {
      this.selectedTransportation.next(transportation);
    }
    setDate(newDate: string) {
      this.selectedDate.next(newDate);
    }

    setSelectedName(selectedName: string) {
      this.selectedName.next(selectedName);
    }
}