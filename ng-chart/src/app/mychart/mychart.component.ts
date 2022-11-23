import { MasterService } from './../master.service';
import { Component, OnInit } from '@angular/core';
import { Chart, registerables } from 'chart.js';
@Component({
  selector: 'app-mychart',
  templateUrl: './mychart.component.html',
  styleUrls: ['./mychart.component.css'],
})
export class MychartComponent implements OnInit {
  constructor(private service: MasterService) {
    Chart.register(...registerables);
  }
  chartData: any;
  realData: any[] = [];
  labelData: any[] = [];
  colorData: any[] = [];
  place: any[] = [];
  ngOnInit(): void {
    this.service.Getchartinfo().subscribe((res) => {
      this.chartData = res;
      console.log(this.chartData);
      if (this.chartData != null) {
        for (let i = 0; i < this.chartData.length; i++) {
          this.labelData.push(this.chartData[i].year);
          this.realData.push(this.chartData[i].amount);
          this.colorData.push(this.chartData[i].colorcode);
          this.place.push(this.chartData[i].place);
        }
        this.RenderChart(
          this.labelData,
          this.realData,
          this.colorData,
          'barChart',
          'bar'
        );
        this.RenderChart(
          this.labelData,
          this.realData,
          this.colorData,
          'piechart',
          'pie'
        );
        this.RenderChart(
          this.labelData,
          this.realData,
          this.colorData,
          'donutchart',
          'doughnut'
        );
        this.RenderBubble(this.labelData,this.realData);
      }
    });
  }
  RenderChart(label: any, data: any, color: any, id: any, type: any) {
    const myChart = new Chart(id, {
      type: type,
      data: {
        labels: label,
        datasets: [
          {
            label: '# of Votes',
            data: data,
            backgroundColor: color,
            borderColor: [
              'rgba(255, 99, 132, 1)',
              'rgba(54, 162, 235, 1)',
              'rgba(255, 206, 86, 1)',
              'rgba(75, 192, 192, 1)',
              'rgba(153, 102, 255, 1)',
              'rgba(255, 159, 64, 1)',
            ],
            borderWidth: 1,
          },
          
        ],
      },
      options: {
        scales: {
          y: {
            beginAtZero: true,
          },
        },
      },
    });
  }
  RenderBubble(label:any,data:any,)
  {
    const myChart = new Chart('bubblechart', {
      type: 'bubble',
      data: {
        labels: label,
        datasets: [
          {
            label: '# of Votes',
            data: data,
            backgroundColor: 'rgb(255, 99, 132)',
            borderColor: [
              'rgba(255, 99, 132, 1)',
              'rgba(54, 162, 235, 1)',
              'rgba(255, 206, 86, 1)',
              'rgba(75, 192, 192, 1)',
              'rgba(153, 102, 255, 1)',
              'rgba(255, 159, 64, 1)',
            ],
            borderWidth: 1,
          },
        ],
      },
      options: {
        scales: {
          y: {
            beginAtZero: true,
          },
        },
      },
    });
  }
}
