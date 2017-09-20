;
import { DisplayComponent } from './display/display.component';
import { SearchComponent } from './search/search.component'
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { MarvelService } from './marvel.service';



@NgModule({
  declarations: [
    AppComponent,
    SearchComponent, 
    DisplayComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    FormsModule
  ],
  providers: [
    MarvelService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
