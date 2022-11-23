import { Component, OnInit } from '@angular/core';
@Component({
  selector: 'app-google-chart',
  templateUrl: './google-chart.component.html',
  styleUrls: ['./google-chart.component.css'],
})
export class GoogleChartComponent implements OnInit {
  chartData: any = {
    type: 'LineChart',
    data: [
      [1, 2, 8],
      [5, 7, 3],
    ],
    columnNames: ['Day', 'Guardians of the Galaxy', 'The Avengers'],
    options: {
      hAxis: {
        title: 'Box Office Earnings in First Two Weeks of Opening',
      },
      vAxis: {
        title: 'in millions of dollars (USD)',
      },
    },
    width: 1000,
    height: 400,
  };
  constructor() {}

  ngOnInit(): void {
    google.charts.load('current', { packages: ['corechart'] });
    google.charts.setOnLoadCallback(this.drawChart);
  }
  drawChart() {
    var data = google.visualization.arrayToDataTable([
      ['Task', 'Hours per Day'],
      ['Work', 11],
      ['Eat', 2],
      ['Commute', 2],
      ['Watch TV', 2],
      ['Sleep', 7],
    ]);

    var options = {
      title: 'My Daily Activities',
    };
    var chart = new google.visualization.PieChart(
      document.getElementById('piechart') as HTMLElement
    );
    chart.draw(data, options);
  }
}
