import { Injectable } from '@angular/core';
import { ItemMapped } from './_interfaces_/data.mapped.interface';
import { Item } from './_interfaces_/data.interface';

@Injectable()
export class DataMapperSevice {
  constructor() {}

  mapData(response: Array<Item>): Array<ItemMapped> {
    const recursiveNesting = (items, id = null, link = 'parent_id') =>
      items
        .filter(item => item[link] === id)
        .map(item => ({ ...item, children: recursiveNesting(items, item.id) }));
    return recursiveNesting(response);
  }
}
