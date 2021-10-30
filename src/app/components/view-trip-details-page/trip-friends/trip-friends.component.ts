import { Component, OnInit } from '@angular/core';
import { Friend } from 'src/app/models/friends.model';
import { UserProfileService } from 'src/app/services/user-profile.service';

@Component({
  selector: 'ts-trip-friends',
  templateUrl: './trip-friends.component.html',
  styleUrls: ['./trip-friends.component.less']
})
export class TripFriendsComponent implements OnInit {
  
    friendList!: Friend[];

    constructor(private userProfileService: UserProfileService){}

    ngOnInit() {
        this.friendList = this.userProfileService.retrieveFriendsForTrip('123456');
    }

    removeInvite() {
        alert(123);
    }

}
