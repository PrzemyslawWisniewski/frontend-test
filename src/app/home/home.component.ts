import { Component, OnInit, OnDestroy } from '@angular/core';
import { map, takeUntil } from 'rxjs/operators';
import { Subject } from 'rxjs';
import { ItemMapped } from './services/data/_interfaces_/data.mapped.interface';
import { DataService } from './services/data/data.service';
import { DataMapperSevice } from './services/data/data.mapper.service';
import { EventService } from './services/event/event.service';
import { HomeService } from './home.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit, OnDestroy {
  public items: Array<ItemMapped>;
  public itemSelected: ItemMapped;
  private unsubscribeAll$: Subject<void> = new Subject();

  constructor(
    private dataService: DataService,
    private dataMapperSevice: DataMapperSevice,
    private eventService: EventService,
    private homeService: HomeService,
  ) {}

  ngOnInit(): void {
    this.getApiData();
    this.subscribeToItemSelect();
  }

  private getApiData(): void {
    this.dataService
      .getDataFromApi()
      .pipe(
        map(response => this.dataMapperSevice.mapData(response)),
        takeUntil(this.unsubscribeAll$),
      )
      .subscribe(resp => ((this.items = resp), this.emitItemsObservable()));
  }

  private emitItemsObservable(): void {
    this.homeService.emitItems(this.items);
  }

  private subscribeToItemSelect(): void {
    this.eventService
      .eventListner()
      .pipe(takeUntil(this.unsubscribeAll$))
      .subscribe(el => {
        this.itemSelected = el;
      });
  }

  public backNavigation(): void {
    this.itemSelected = null;
  }

  ngOnDestroy(): void {
    this.unsubscribeAll$.next();
    this.unsubscribeAll$.complete();
  }
}
