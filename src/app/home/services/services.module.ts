import { NgModule } from '@angular/core';
import { DataService } from './data/data.service';
import { DataMapperSevice } from './data/data.mapper.service';
import { EventService } from './event/event.service';
import { HomeService } from '../home.service';

@NgModule({
  providers: [DataService, DataMapperSevice, EventService, HomeService],
})
export class ServicesModule {}
