import { Component, OnInit, OnDestroy } from '@angular/core';
import { map, takeUntil } from 'rxjs/operators';
import { Subject } from 'rxjs';
import { ItemMapped } from './services/data/_interfaces_/data.mapped.interface';
import { DataService } from './services/data/data.service';
import { DataMapperSevice } from './services/data/data.mapper.service';
import { EventService } from './services/event/event.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit, OnDestroy {
  private unsubscribeAll$: Subject<void> = new Subject();
  public items: Array<ItemMapped>;
  public itemSelected: ItemMapped;

  constructor(
    private dataService: DataService,
    private dataMapperSevice: DataMapperSevice,
    private eventService: EventService,
  ) {}

  ngOnInit(): void {
    this.getApiData();
    this.subscribeToItemSelect();
  }

  public getApiData(): void {
    this.dataService
      .getDataFromApi()
      .pipe(
        map(response => this.dataMapperSevice.mapData(response)), // TODO delete
        takeUntil(this.unsubscribeAll$),
      )
      .subscribe(next => ((this.items = next), console.log('home comp sub', next)));
  }

  public subscribeToItemSelect(): void {
    this.eventService
      .eventListner()
      .pipe(takeUntil(this.unsubscribeAll$))
      .subscribe(el => {
        (this.itemSelected = el), console.log('home comp sub to eventListener', el);
      });
  }

  ngOnDestroy(): void {
    this.unsubscribeAll$.next();
    this.unsubscribeAll$.complete();
  }
}
