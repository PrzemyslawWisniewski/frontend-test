import { Injectable } from '@angular/core';
import { UrlConstant } from './partials/url.constant';

@Injectable()
export class GlobalConstant {
  public url: UrlConstant = new UrlConstant();
}
