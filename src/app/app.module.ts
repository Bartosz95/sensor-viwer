import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';

import { MatToolbarModule } from '@angular/material/toolbar';

import { Header } from './header/header.component';
import { TemperatureChart } from './charts/temperature-chart.component';
import { HumidityChart } from './charts/humidity-chart.component';
import { PressureChart } from './charts/pressure-chart.component';


@NgModule({
  declarations: [
    AppComponent,
    Header,
    TemperatureChart,
    HumidityChart,
    PressureChart
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
