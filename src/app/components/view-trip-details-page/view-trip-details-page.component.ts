import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, } from '@angular/router';
import { BehaviorSubject } from 'rxjs';
import { Trip } from 'src/app/models/trip.model';
import { TripService } from 'src/app/services/trip.service';

@Component({
  selector: 'ts-view-trip-details-page',
  templateUrl: './view-trip-details-page.component.html',
  styleUrls: ['./view-trip-details-page.component.less']
})
export class ViewTripDetailsPageComponent implements OnInit {
  
    tripSeqId!: string | null;
    trip!: Trip;
    activeTab: BehaviorSubject<string> = new BehaviorSubject<string>('Overview');

    constructor(
      private route: ActivatedRoute,
      private tripService: TripService
      ) {}

    ngOnInit() {
      this.route.paramMap.subscribe(params => {
        this.tripSeqId = params.get('seqId');
        this.trip = this.tripService.getTripFromSeqId(this.tripSeqId);
      });
    }

    setActiveTab(tab: string) {
      this.activeTab.next(tab);
    }

}
