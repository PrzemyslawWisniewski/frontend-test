import { Component, OnInit, Input } from '@angular/core';
import { ItemMapped } from '../../services/data/_interfaces_/data.mapped.interface';

@Component({
  selector: 'app-item-selected',
  templateUrl: './item-selected.component.html',
  styleUrls: ['./item-selected.component.scss'],
})
export class ItemSelectedComponent implements OnInit {
  @Input() public itemSelected: ItemMapped;
  constructor() {}

  ngOnInit(): void {}
}
