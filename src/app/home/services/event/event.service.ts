import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { ItemMapped } from '../data/_interfaces_/data.mapped.interface';

@Injectable({
  providedIn: 'root',
})
export class EventService {
  private item: ItemMapped;
  private selectedItemEvent = new BehaviorSubject<ItemMapped>(this.item);

  constructor() {}

  public emitSelectedItem(item: ItemMapped): void {
    this.selectedItemEvent.next(item);
  }

  public eventListner(): Observable<ItemMapped> {
    return this.selectedItemEvent.asObservable();
  }
}
