import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { HomeComponent } from './home/home.component';
import { HeaderComponent } from './home/components/header/header.component';
import { NavigationComponent } from './home/components/navigation/navigation.component';
import { ItemListComponent } from './home/components/item-list/item-list.component';
import { ItemComponent } from './home/components/item-list/item/item.component';
import { ServicesModule } from './home/services/services.module';
import { ItemSelectedComponent } from './home/components/item-selected/item-selected.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeaderComponent,
    NavigationComponent,
    ItemListComponent,
    ItemComponent,
    ItemSelectedComponent,
  ],
  imports: [BrowserModule, HttpClientModule, AppRoutingModule, ServicesModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
