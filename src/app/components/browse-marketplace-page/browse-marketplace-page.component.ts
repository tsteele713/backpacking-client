import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'ts-browse-marketplace-page',
  templateUrl: './browse-marketplace-page.component.html',
  styleUrls: ['./browse-marketplace-page.component.less']
})
export class BrowseMarketplacePageComponent implements OnInit{
  
  parkList!: string[];

  ngOnInit() {
    this.parkList = ['Yosemite National Park', 'Zion Canyon National Park', 'Shenandoah National Park', 'Great Smoky Mountains National Park'].sort();
  }

}
