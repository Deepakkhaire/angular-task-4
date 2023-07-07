import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import {Chart} from 'chart.js';
import { registerables } from 'chart.js';
import { FormAndChartComponent } from './form-and-chart/form-and-chart.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
Chart.register(...registerables);

@NgModule({
  declarations: [
    AppComponent,
    FormAndChartComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  exports: [
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule { }
