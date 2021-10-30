import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from "src/environments/environment";
import { Friend } from "../models/friends.model";
import { ChecklistItem } from "../models/checklist-item.model";

@Injectable()
export class ChecklistService {

    baseUrl = environment.baseUrl;

    constructor(private http: HttpClient) { }

    createChecklistItem(request: any) {
        let headers = new HttpHeaders();
        headers.set('Access-Control-Allow-Origin', '*');
        return this.http.post(this.baseUrl + '/users/createProfile', request, {headers: headers});
    }

    retrieveChecklistForTrip(tripSeqId: string): ChecklistItem[] {

        return [
            {
                seqId: '12345',
                item: 'Toilet Paper',
                selected: false
            },
            {
                seqId: '12345',
                item: 'Propane Canister',
                selected: true
            },            {
                seqId: '12345',
                item: 'Headlamp',
                selected: false
            }
        ]

    }
}