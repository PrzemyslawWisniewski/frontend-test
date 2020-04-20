import { Component, OnInit, Input, OnDestroy } from '@angular/core';
import { ItemMapped } from '../../services/data/_interfaces_/data.mapped.interface';
import { Observable, combineLatest, Subject, from, of } from 'rxjs';
import { FormControl } from '@angular/forms';
import { startWith, map, takeUntil } from 'rxjs/operators';
import { DataService } from '../../services/data/data.service';
import { HomeService } from '../../home.service';
import { DataMapperSevice } from '../../services/data/data.mapper.service';

@Component({
  selector: 'app-item-list',
  templateUrl: './item-list.component.html',
  styleUrls: ['./item-list.component.scss'],
})
export class ItemListComponent implements OnInit, OnDestroy {
  public filter: FormControl;
  public filter$: Observable<string>;
  public search$: Observable<Array<ItemMapped>>;
  public filteredStates$: Array<any>;
  private unsubscribeAll$: Subject<void> = new Subject();

  constructor(
    private dataService: DataService,
    private homeService: HomeService,
    private dataMapperSevice: DataMapperSevice,
  ) {
    this.filter = new FormControl('');
    this.filter$ = this.filter.valueChanges.pipe(startWith(''));
  }

  ngOnInit(): void {
    this.getItemList();
    this.filterItems();
  }

  public getItemList() {
    this.search$ = this.dataService.getDataFromApi().pipe(
      map(response => this.dataMapperSevice.mapData(response)),
      takeUntil(this.unsubscribeAll$),
    );
  }

  public filterItems() {
    return combineLatest([this.search$, this.filter$])
      .pipe(
        map(([search, filterString]) =>
          search.filter(
            state => state.title.toLowerCase().indexOf(filterString.toLowerCase()) !== -1,
          ),
        ),
        takeUntil(this.unsubscribeAll$),
      )
      .subscribe(el => (this.filteredStates$ = el));
  }

  ngOnDestroy(): void {
    this.unsubscribeAll$.next();
    this.unsubscribeAll$.complete();
  }
}
