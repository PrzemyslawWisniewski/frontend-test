import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { ItemMapped } from '../data/_interfaces_/data.mapped.interface';

@Injectable({
  providedIn: 'root',
})
export class EventService {
  private item: ItemMapped;
  private selectedItemEvent = new BehaviorSubject<ItemMapped>(this.item);

  constructor() {}

  emitSelectedItem(item: ItemMapped) {
    this.selectedItemEvent.next(item);
  }

  eventListner() {
    return this.selectedItemEvent.asObservable();
  }
}
