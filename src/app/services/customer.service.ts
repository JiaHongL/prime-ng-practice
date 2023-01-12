import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

export interface Country {
    name?: string;
    code?: string;
}

export interface Representative {
    name?: string;
    image?: string;
}

export interface Customer {
    id?: number;
    name?: number;
    country?: Country;
    company?: string;
    date?: string | Date;
    status?: string;
    representative?: Representative;
}

@Injectable({
    providedIn: 'root'
})
export class CustomerService {
    constructor(private http: HttpClient) { }

    getCustomersLarge() {
        return this.http.get<any>('assets/showcase/data/customers-large.json')
            .toPromise()
            .then(res => <Customer[]>res.data)
            .then(data => { return data; });
    }

    getCustomersMedium() {
        return this.http.get<any>('assets/showcase/data/customers-medium.json')
            .toPromise()
            .then(res => <Customer[]>res.data)
            .then(data => { return data; });
    }
}