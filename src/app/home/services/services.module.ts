import { NgModule } from '@angular/core';
// import { CommonModule } from '@angular/common';
import { DataService } from './data/data.service';
import { DataMapperSevice } from './data/data.mapper.service';
import { EventService } from './event/event.service';

@NgModule({
  // declarations: [],
  // imports: [CommonModule],
  providers: [DataService, DataMapperSevice, EventService],
})
export class ServicesModule {}
