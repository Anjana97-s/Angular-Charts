import { PaymentModel } from './../../model/payment.model';
import { MasterService } from './../master.service';
import { Component, OnInit } from '@angular/core';
declare var google:any;
@Component({
  selector: 'app-google-barchart',
  templateUrl: './google-barchart.component.html',
  styleUrls: ['./google-barchart.component.css'],
})
export class GoogleBarchartComponent implements OnInit {
  chartdata:any;
  constructor(private service:MasterService) {}
  ngOnInit(): void {
    this.service.Getchartinfo().subscribe(res=>{
this.chartdata=res;
this.buildChart(this.chartdata)

    })
    google.charts.load('current', { packages: ['corechart'] });
  }
  buildChart(model:PaymentModel[])
  {

var renderChart=(chart:any)=>{

var charItems=[];
charItems.push(['', '']);
model.forEach(items=>{
  charItems.push([ items.year, items.amount])
});
var data = google.visualization.arrayToDataTable(charItems);
 var options = {
  title: "",
  width: 600,
  height: 400,
  bar: {groupWidth: "95%"},
};
 chart().draw(data,options);
}
var barChart=()=>new google.visualization.BarChart(document.getElementById("divbar")as HTMLElement);
var callback=()=>renderChart(barChart);
google.charts.setOnLoadCallback(callback);

  }

}
