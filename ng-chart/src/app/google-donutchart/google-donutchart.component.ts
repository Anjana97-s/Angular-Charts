import { Component, OnInit } from '@angular/core';
import { ActivityModel } from 'src/model/activity.model';
import { PaymentModel } from 'src/model/payment.model';
import { MasterService } from '../master.service';

@Component({
  selector: 'app-google-donutchart',
  templateUrl: './google-donutchart.component.html',
  styleUrls: ['./google-donutchart.component.css'],
})
export class GoogleDonutchartComponent implements OnInit {
  chartdata: any;

  constructor(private service: MasterService) {}

  ngOnInit(): void {
this.service.Getchartinfo().subscribe(res=>{
  this.chartdata=res;
  console.log(this.chartdata);
  this.buildChart(this.chartdata)

})
    google.charts.load('current', { packages: ['corechart'] });

  }
  buildChart(model:PaymentModel[])
  {

var renderChart=(chart:any)=>{

var charItems=[];
charItems.push(['', '','']);
model.forEach(items=>{
  charItems.push([ items.colorcode,  items.year, items.amount])
});
var data = google.visualization.arrayToDataTable(charItems);
 var options = {
  title: "",

};
 chart().draw(data,options);
}
var barChart=()=>new google.visualization.PieChart(document.getElementById("donutchart")as HTMLElement);
var callback=()=>renderChart(barChart);
google.charts.setOnLoadCallback(callback);

  }

 
}

