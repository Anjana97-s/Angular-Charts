import { NgChartApiComponent } from './ng-chart-api/ng-chart-api.component';
import { NgChartComponent } from './ng-chart/ng-chart.component';
import { GoogleDonutchartComponent } from './google-donutchart/google-donutchart.component';
import { GoogleBarchartComponent } from './google-barchart/google-barchart.component';
import { GooglePieChartComponent } from './google-pie-chart/google-pie-chart.component';
import { GoogleChartComponent } from './google-chart/google-chart.component';
import { MychartComponent } from './mychart/mychart.component';
import { HomeComponent } from './home/home.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
  },
  {
    path: 'mychart',
    component: MychartComponent,
  },
  {
    path: 'googlechart',
    component: GoogleChartComponent,
  },
  {
    path: 'googlepie',
    component: GooglePieChartComponent
  },
  {
    path: 'googlebar',
    component: GoogleBarchartComponent
  },
  {
    path: 'googledonut',
    component: GoogleDonutchartComponent
  },
  {
    path: 'ngcharts',
    component: NgChartComponent
  },
  {
    path: 'ngApi',
    component: NgChartApiComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
