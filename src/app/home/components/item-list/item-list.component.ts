import { Component, OnInit, Input, OnDestroy } from '@angular/core';
import { ItemMapped } from '../../services/data/_interfaces_/data.mapped.interface';
import { Observable, combineLatest, Subject } from 'rxjs';
import { FormControl } from '@angular/forms';
import { startWith, map, takeUntil } from 'rxjs/operators';
import { DataService } from '../../services/data/data.service';
import { HomeService } from '../../home.service';

@Component({
  selector: 'app-item-list',
  templateUrl: './item-list.component.html',
  styleUrls: ['./item-list.component.scss'],
})
export class ItemListComponent implements OnInit, OnDestroy {
  @Input() public items: Array<ItemMapped>;
  public filter: FormControl;
  public filter$: Observable<string>;
  public search$: Observable<Array<ItemMapped>>;
  public filteredStates$: Observable<Array<ItemMapped>>;
  private unsubscribeAll$: Subject<void> = new Subject();

  constructor(private dataService: DataService, private homeService: HomeService) {
    this.search$ = this.homeService.itemsObseravble$;
    this.filter = new FormControl('');
    this.filter$ = this.filter.valueChanges.pipe(startWith(''));
  }

  ngOnInit(): void {
    this.filterItems();
    console.log('Item-list OnInit');
  }

  public filterItems() {
    this.filteredStates$ = combineLatest([this.search$, this.filter$]).pipe(
      map(([search, filterString]) =>
        search.filter(
          state => state.title.toLowerCase().indexOf(filterString.toLowerCase()) !== -1,
        ),
      ),
      takeUntil(this.unsubscribeAll$),
    );
  }

  ngOnDestroy(): void {
    this.unsubscribeAll$.next();
    this.unsubscribeAll$.complete();
  }
}
