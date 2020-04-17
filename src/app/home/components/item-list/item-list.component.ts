import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { ItemMapped } from '../../services/data/_interfaces_/data.mapped.interface';

@Component({
  selector: 'app-item-list',
  templateUrl: './item-list.component.html',
  styleUrls: ['./item-list.component.scss'],
})
export class ItemListComponent implements OnInit {
  @Input() public items: Array<ItemMapped>;
  constructor() {}

  ngOnInit(): void {}
}
