import { Component, Input, OnInit } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Trip } from 'src/app/models/trip.model';

@Component({
  selector: 'ts-trip-description',
  templateUrl: './trip-description.component.html',
  styleUrls: ['./trip-description.component.less']
})
export class TripDescriptionComponent implements OnInit {
  
    @Input() trip!: Trip;
    editing: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);
    description: BehaviorSubject<string> = new BehaviorSubject<string>('');
    editedDescription: string = '';

    ngOnInit() {
        if (this.trip.description) {
            this.description.next(this.trip.description);
            this.editedDescription = this.trip.description;
        }
    }

    toggleEditing() {
        this.editing.next(!this.editing.getValue());
    }

    cancel() {
        this.editedDescription = this.description.getValue();
        this.editing.next(false);
    }

    save() {
        this.description.next(this.editedDescription);
        this.editing.next(false);
    }

}
