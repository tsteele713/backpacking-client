import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject } from 'rxjs';

@Component({
  selector: 'ts-navigation-bar',
  templateUrl: './navigation-bar.component.html',
  styleUrls: ['./navigation-bar.component.less']
})
export class NavigationBarComponent implements OnInit{
    
  activeTab: BehaviorSubject<string> = new BehaviorSubject('');

  constructor(private router: Router ){}

  ngOnInit() {
    this.activeTab.next(this.router.url.substring(1));
  }

  setActive(tab: string): void {
    
    this.activeTab.next(tab);
  }
}
