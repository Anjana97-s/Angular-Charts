import { ActivityModel } from './../../model/activity.model';
import { MasterService } from './../master.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-google-pie-chart',
  templateUrl: './google-pie-chart.component.html',
  styleUrls: ['./google-pie-chart.component.css'],
})
export class GooglePieChartComponent implements OnInit {
  constructor(private masterservice: MasterService) {}
  items: ActivityModel[]=[]
  ngOnInit(): void {

    var piechdata = this.masterservice.getAll();
    console.log(piechdata);

    google.charts.load('current', { packages: ['corechart'] });
    this.buildChart(piechdata);
    console.log("/***/");

  }
  buildChart(items: ActivityModel[]) {
    var renderChart = (chart: any) => {
      var chartItems = [];
      chartItems.push(['Year', 'Amount']);
      items.forEach((item) => {
        chartItems.push([item.shop, item.amount]);
      });
      var data = google.visualization.arrayToDataTable(chartItems);
      var options = {
        title: 'My Daily Activities',
      };

      chart().draw(data, options);
    };
    var Stackedchart = () =>
      new google.visualization.PieChart(
        document.getElementById('piechart') as HTMLElement
      );
    var callBack = () => renderChart(Stackedchart);
    google.charts.setOnLoadCallback(callBack);
  }

  // drawChart()
  // {
  //   var data = google.visualization.arrayToDataTable([
  //     ['Task', 'Hours per Day'],
  //     ['Work',     11],
  //     ['Eat',      2],
  //     ['Commute',  2],
  //     ['Watch TV', 2],
  //     ['Sleep',    7]
  //   ]);

  //   var options = {
  //     title: 'My Daily Activities'
  //   };

  //   var chart = new google.visualization.PieChart(document.getElementById('piechart')as HTMLElement);

  //   chart.draw(data, options);
  // }
}
