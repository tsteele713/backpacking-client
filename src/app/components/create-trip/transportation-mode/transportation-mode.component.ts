import { Component, EventEmitter, Output, TemplateRef } from '@angular/core';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { BehaviorSubject } from 'rxjs';

@Component({
  selector: 'ts-transportation-mode',
  templateUrl: './transportation-mode.component.html',
  styleUrls: ['./transportation-mode.component.less']
})
export class TransportationModeComponent {

    @Output() selectedTransportation = new EventEmitter<string>();

    transportationType: BehaviorSubject<string> = new BehaviorSubject('');

    selectTravelOption(modeOfTransportation: string) {
        this.transportationType.next(modeOfTransportation);
        this.selectedTransportation.emit(modeOfTransportation);
    }
}
