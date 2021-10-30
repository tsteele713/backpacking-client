import { Component, Input, OnInit } from '@angular/core';
import { ChecklistItem } from 'src/app/models/checklist-item.model';
import { Trip } from 'src/app/models/trip.model';
import { ChecklistService } from 'src/app/services/checklist.service';
import { UserProfileService } from 'src/app/services/user-profile.service';

@Component({
  selector: 'ts-trip-checklist',
  templateUrl: './trip-checklist.component.html',
  styleUrls: ['./trip-checklist.component.less']
})
export class TripChecklistComponent implements OnInit {
  
    checklistItems: ChecklistItem[] = [];
    @Input() trip!: Trip;

    constructor(private checklistService: ChecklistService){}

    ngOnInit() {
        this.checklistItems = this.checklistService.retrieveChecklistForTrip('12345');
    }
}
