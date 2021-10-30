import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from "src/environments/environment";
import { Friend } from "../models/friends.model";

@Injectable()
export class UserProfileService {

    baseUrl = environment.baseUrl;

    constructor(private http: HttpClient) { }

    createProfile(request: any) {
        let headers = new HttpHeaders();
        headers.set('Access-Control-Allow-Origin', '*');
        return this.http.post(this.baseUrl + '/users/createProfile', request, {headers: headers});
    }

    retrieveFriendsForTrip(tripSeqId: string): Friend[] {

        return [
            {
                seqId: '12345',
                firstName: 'Branden',
                lastName: 'Bellanca'
            },
            {
                seqId: '12345',
                firstName: 'David',
                lastName: 'Weadon'
            },            {
                seqId: '12345',
                firstName: 'Trent',
                lastName: 'Foor'
            },    
            {
                seqId: '12345',
                firstName: 'benjamine',
                lastName: 'gzeszack'
            }
        ]

    }
}