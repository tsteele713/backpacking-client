import { Component } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Component({
  selector: 'ts-view-trips-page',
  templateUrl: './view-trips-page.component.html',
  styleUrls: ['./view-trips-page.component.less']
})
export class ViewTripsPageComponent {
  
  activeTab: BehaviorSubject<string> = new BehaviorSubject<string>('Upcoming Trips');

  setActiveTab(tab: string) {
    this.activeTab.next(tab);
  }
}
