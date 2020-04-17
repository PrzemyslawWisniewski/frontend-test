import { Injectable } from '@angular/core';
import { ItemMapped } from './_interfaces_/data.mapped.interface';
import { Item } from './_interfaces_/data.interface';

@Injectable()
export class DataMapperSevice {
  constructor() {}

  mapData(response: Array<Item>): Array<ItemMapped> {
    // console.log('response ', response);
    return response;
  }
}
// TODO delete the whole service
