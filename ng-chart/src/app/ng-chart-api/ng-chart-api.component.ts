import { MasterService } from './../master.service';
import { Component, OnInit } from '@angular/core';
import { Chart, registerables, ChartData } from 'chart.js';
// import {ChartLabel} from'ng2-charts'
@Component({
  selector: 'app-ng-chart-api',
  templateUrl: './ng-chart-api.component.html',
  styleUrls: ['./ng-chart-api.component.css']
})
export class NgChartApiComponent implements OnInit {
  result: any;
  coinPrice: any;
  coinName: any;
  chart: any = [];

  public barChartData!:any;

  constructor(private service:MasterService) {
    Chart.register(...registerables);

  }

  ngOnInit(): void {
    this.service.cryptoData().subscribe((res)=>{this.result=res;

      this.coinPrice = this.result.data.coins.map((coins: any) => coins.price);
      this.coinName = this.result.data.coins.map((coins: any) => coins.name);

      this.barChartData = new Chart('canvas', {
        type: 'bar',
        data: {
          labels: this.coinName,
          datasets: [
            {
              data: this.coinPrice,
              borderColor: '#3e95cd',
              // fill: false,
              label: 'Coin Price',
              backgroundColor: 'rgba(93, 175, 89, 0.1)',
              borderWidth: 3,
            },
          ],
        },
      });
    });
  }


}
