import { Component, OnInit, Input } from '@angular/core';
import { ItemMapped } from 'src/app/home/services/data/_interfaces_/data.mapped.interface';
import { EventService } from 'src/app/home/services/event/event.service';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.scss'],
})
export class ItemComponent implements OnInit {
  @Input() public item: ItemMapped;
  @Input() public filteredStates: Array<ItemMapped>;
  constructor(private eventService: EventService) {}

  ngOnInit(): void {}

  public btnClick(itemSelected: ItemMapped): void {
    this.eventService.emitSelectedItem(itemSelected);
  }
}
