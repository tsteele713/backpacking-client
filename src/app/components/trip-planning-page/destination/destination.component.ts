import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'ts-destination',
  templateUrl: './destination.component.html',
  styleUrls: ['./destination.component.less']
})
export class DestinationComponent implements OnInit {

    states!: string[];
    parks!: string[];
    parkValue!: string;

    @Output() selectedPark = new EventEmitter<string>();
    @Output() selectedState = new EventEmitter<string>();

    ngOnInit() {
        this.parks = ['Yellowstone', 'Yosemite', 'Smokey Mountains National Park'];
        this.states = ['California', 'Tennessee'];
        this.parkValue = 'Default';
    }

    emitState() {
        alert(456);
    }
    emitPark() {
        this.selectedPark.emit(this.parkValue);
    }

}
