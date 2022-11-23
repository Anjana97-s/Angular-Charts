import { ActivityModel } from './../model/activity.model';
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
const apiKey = 'coinrankingbd3543e0c01d6e152825a9d61795d20482914a8d029d2a58';
const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json',
    'X-My-Custom-Header': `${apiKey}`,
    'Access-Control-Allow-Origin': '*',
  }),
};
@Injectable({
  providedIn: 'root',
})
export class MasterService {
  private baseUrl = 'https://api.coinranking.com/v2/coins';
  private proxyUrl = 'https://cors-anywhere.herokuapp.com/';
  activities: ActivityModel[] = [
    {
      shop: '2015',
      amount: 5000,
    },
    {
      shop: '2016',
      amount: 8000,
    },
    {
      shop: '2017',
      amount: 8500,
    },
    {
      shop: '2018',
      amount: 6500,
    },
  ];
  constructor(private http: HttpClient) {}

  Getchartinfo(): Observable<any> {
    return this.http.get('http://localhost:3000/sales');
  }
  getAll() {
    return this.activities;
  }
  get() {
    return this.http.get('../assets/data.json');
  }
  cryptoData() {
    const url = `${this.proxyUrl}${this.baseUrl}`;
    return this.http.get(url, httpOptions);
  }
}
