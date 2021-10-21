import { Component, Input, OnInit } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Component({
  selector: 'ts-dropdown',
  templateUrl: './dropdown.component.html',
  styleUrls: ['./dropdown.component.less']
})
export class DropdownComponent implements OnInit {
  
    @Input() label!: string;
    @Input() selectList!: string[];

    displayLabel!: BehaviorSubject<string>;

    ngOnInit(){
        this.displayLabel = new BehaviorSubject(this.label);
    }

    setSelection(option: string) {
        this.displayLabel.next(option);
    }

}
