import { Injectable } from '@angular/core';
import { ItemMapped } from './_interfaces_/data.mapped.interface';
import { Item } from './_interfaces_/data.interface';

@Injectable()
export class DataMapperSevice {
  constructor() {}

  mapData(response: Array<Item>): Array<ItemMapped> {
    const root = [];
    response.forEach(node => {
      if (!node.parent_id) return root.push(node);
      const parentIndex = response.findIndex(el => el.id === node.parent_id);
      if (!response[parentIndex].children) {
        return (response[parentIndex].children = [node]);
      }
      response[parentIndex].children.push(node);
    });
    return this.flatten(root);
  }

  private flatten(
    node: Array<ItemMapped>,
    result: Array<ItemMapped> = [],
    depth: number = 0,
  ): Array<ItemMapped> {
    node.forEach(child => {
      const flattened = Object.assign({}, child);
      flattened.depth = depth;
      result.push(flattened);
      if (child.children && child.children.length) {
        this.flatten(child.children, result, depth + 1);
      }
    });
    return result;
  }
}
