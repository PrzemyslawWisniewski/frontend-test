import { Injectable } from '@angular/core';
import { ReplaySubject } from 'rxjs';
import { ItemMapped } from './services/data/_interfaces_/data.mapped.interface';

@Injectable({
  providedIn: 'root',
})
export class HomeService {
  private itemsSource = new ReplaySubject<Array<ItemMapped>>();
  public itemsObseravble$ = this.itemsSource.asObservable();

  constructor() {}

  public emitItems(items: Array<ItemMapped>) {
    this.itemsSource.next(items);
  }
}
