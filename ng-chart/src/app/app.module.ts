import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { MychartComponent } from './mychart/mychart.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { GoogleChartsModule } from 'angular-google-charts';
import { GoogleChartComponent } from './google-chart/google-chart.component';
import { GooglePieChartComponent } from './google-pie-chart/google-pie-chart.component';
import { GoogleBarchartComponent } from './google-barchart/google-barchart.component';
import { GoogleDonutchartComponent } from './google-donutchart/google-donutchart.component';
import { NgChartComponent } from './ng-chart/ng-chart.component';
import { NgChartsModule } from 'ng2-charts';
import { NgChartApiComponent } from './ng-chart-api/ng-chart-api.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    MychartComponent,
    GoogleChartComponent,
    GooglePieChartComponent,
    GoogleBarchartComponent,
    GoogleDonutchartComponent,
    NgChartComponent,
    NgChartApiComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    NgbModule,
    GoogleChartsModule,
    NgChartsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
