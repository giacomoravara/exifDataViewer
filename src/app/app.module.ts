import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FlexLayoutModule } from '@angular/flex-layout';
import {CommonModule} from '@angular/common'
import {ScrollingModule} from '@angular/cdk/scrolling';
import { EfixDataComponent } from './components/efix-data/efix-data.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    EfixDataComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    HttpClientModule,
    ScrollingModule,
    FlexLayoutModule,
    CommonModule,
    ],
  schemas: [],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
