import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Item } from './_interfaces_/data.interface';

@Injectable({
  providedIn: 'root',
})
export class DataService {
  constructor(private httpClient: HttpClient) {}

  public getDataFromApi(): Observable<Array<Item>> {
    const url = 'http://localhost:3000/items';
    return this.httpClient.get<Array<Item>>(url);
  }
}
