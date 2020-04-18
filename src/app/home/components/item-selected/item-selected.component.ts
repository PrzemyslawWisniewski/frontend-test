import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { ItemMapped } from '../../services/data/_interfaces_/data.mapped.interface';

@Component({
  selector: 'app-item-selected',
  templateUrl: './item-selected.component.html',
  styleUrls: ['./item-selected.component.scss'],
})
export class ItemSelectedComponent implements OnInit {
  @Input() public itemSelected: ItemMapped;
  @Output() public btnClick: EventEmitter<boolean> = new EventEmitter<boolean>();
  constructor() {}

  ngOnInit(): void {}

  public btnClicked(): void {
    this.btnClick.emit(true);
  }
}
