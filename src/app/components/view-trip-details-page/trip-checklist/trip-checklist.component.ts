import { Component, OnInit } from '@angular/core';
import { UserProfileService } from 'src/app/services/user-profile.service';

@Component({
  selector: 'ts-trip-checklist',
  templateUrl: './trip-checklist.component.html',
  styleUrls: ['./trip-checklist.component.less']
})
export class TripChecklistComponent implements OnInit {
  
    checklistItems: any[] = [];

    ngOnInit() {

    }
}
