import { PaymentModel } from 'src/model/payment.model';
import { MasterService } from './../master.service';
import { Component, OnInit, ViewChild } from '@angular/core';
import { HttpErrorResponse } from '@angular/common/http';
import { ChartType, ChartData } from 'chart.js';
import { BaseChartDirective } from 'ng2-charts';

@Component({
  selector: 'app-ng-chart',
  templateUrl: './ng-chart.component.html',
  styleUrls: ['./ng-chart.component.css'],
})
export class NgChartComponent implements OnInit {
  @ViewChild(BaseChartDirective) chart?: BaseChartDirective;

  constructor(private service: MasterService) {}
  displayData: PaymentModel[] = [];
  chartAmount: any = [];
  ChartData: any =[]
  ngOnInit(): void {
    this.service.Getchartinfo().subscribe((res) => {
      this.displayData = res;
      console.log('entered', this.displayData);
      this.displayData.forEach((d) => {
        this.chartAmount.push(d.place);
        this.ChartData.push(d.amount);
        this.chart?.update();

      });
      console.log('exit', this.chartAmount);
      console.log('chartData', this.ChartData);
    });
  }
  barChartData = {
    // labels: ['a', 'b', 'c', 'd'],
    labels: this.chartAmount,
    datasets: [
      {
        label: 'My First Dataset',
        data: this.ChartData,
        backgroundColor: [
          'rgba(255, 99, 132, 0.2)',
          'rgba(255, 159, 64, 0.2)',
          'rgba(255, 205, 86, 0.2)',
          'rgba(75, 192, 192, 0.2)',
          'rgba(54, 162, 235, 0.2)',
          'rgba(153, 102, 255, 0.2)',
          'rgba(201, 203, 207, 0.2)',
        ],
        borderColor: [
          'rgb(255, 99, 132)',
          'rgb(255, 159, 64)',
          'rgb(255, 205, 86)',
          'rgb(75, 192, 192)',
          'rgb(54, 162, 235)',
          'rgb(153, 102, 255)',
          'rgb(201, 203, 207)',
        ],
      },
    ],
  };
}
