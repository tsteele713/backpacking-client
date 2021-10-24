import { Component, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Component({
  selector: 'ts-browse-marketplace-page',
  templateUrl: './browse-marketplace-page.component.html',
  styleUrls: ['./browse-marketplace-page.component.less']
})
export class BrowseMarketplacePageComponent implements OnInit{

  parkList!: string[];
  areaSelectionDisabled!: BehaviorSubject<boolean>;
  searchParkDisabled!: BehaviorSubject<boolean>;
  selectedPark!: string;
  selectedArea!: string;

  ngOnInit() {
    this.parkList = ['Yosemite National Park', 'Zion Canyon National Park', 'Shenandoah National Park', 'Great Smoky Mountains National Park'].sort();
    this.areaSelectionDisabled = new BehaviorSubject<boolean>(true);
    this.searchParkDisabled = new BehaviorSubject<boolean>(true);
    this.selectedPark = 'Default';
    this.selectedArea = 'Default';
  }

  setPark() {
    if (this.selectedPark === 'Default') {
      this.searchParkDisabled.next(true);
      this.areaSelectionDisabled.next(true);
    } else {
      this.areaSelectionDisabled.next(false);
    }
  }

  setArea() {
    if (this.selectedArea === 'Default') {
      this.searchParkDisabled.next(true);
    } else {
      this.searchParkDisabled.next(false);
    }
  }

}
