import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
    providedIn:'root'
})
export class EventService {
    constructor(private http: HttpClient) {}

    getEvents() {
        return this.http
            .get<any>(environment.serverFolderPath + 'assets/showcase/data/scheduleevents.json')
            .toPromise()
            .then((res) => <any[]>res.data)
            .then((data) => {
                return data;
            });
    }
}