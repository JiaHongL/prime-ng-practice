import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
    providedIn: 'root',
})
export class CountryService {

    constructor(private http: HttpClient) { }

    getCountries() {
        return this.http.get<any>(environment.serverFolderPath + 'assets/countries.json')
            .toPromise()
            .then(res => <any[]>res.data)
            .then(data => { return data; });
    }
}