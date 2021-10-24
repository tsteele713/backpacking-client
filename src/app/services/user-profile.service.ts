import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from "src/environments/environment";

@Injectable()
export class UserProfileService {

    baseUrl = environment.baseUrl;

    constructor(private http: HttpClient) { }

    createProfile(request: any) {
        let headers = new HttpHeaders();
        headers.set('Access-Control-Allow-Origin', '*');
        return this.http.post(this.baseUrl + '/users/createProfile', request, {headers: headers});
    }
}