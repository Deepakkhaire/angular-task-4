import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

import { Chart } from 'chart.js';

@Component({
  selector: 'app-form-and-chart',
  templateUrl: './form-and-chart.component.html',
  styleUrls: ['./form-and-chart.component.css']
})
export class FormAndChartComponent {

  pieChartForm!: FormGroup;

  ctx: any;
  config: any;
  chartData: number[] = [];
  chartDatalabels: any[] = [];
  firstTimeUpdate = true;
  val1: any
  val2: any
  myChart: any;

  ngOnInit() {
    this.pieChartForm = new FormGroup(
      {
        colValue: new FormControl(this.chartData, [Validators.required, Validators.minLength(2)]),
        colValue2: new FormControl(this.chartData)
      }
    )
  }

  createChart() {

    this.prepareChartOnlyIfFirstTimeDataIsEntered();

    this.pushFormDataIntoChart();

    this.firstTimeUpdate = false;

    this.myChart.update();

  }
  validVal1(){
    this.val1 = this.pieChartForm.value.colValue;
    if(this.val1 <= 100){
      this.val2 = 100 - this.val1;
      console.log(this.val2);
    }
  }
  validVal2(){
    this.val2 = this.pieChartForm.value.colValue2;
    if(this.val2 <= 100){
      this.val1 = 100 - this.val2;
      console.log(this.val1);
    }
  }

  private pushFormDataIntoChart() {
    
    this.chartData.push(this.val1);
    this.chartData.push(this.val2);

  }

  private prepareChartOnlyIfFirstTimeDataIsEntered() {
    if (this.firstTimeUpdate) {
      this.prepareChart();
    }
  }
 
  // reset(){
   
  //   // this.chartData = [];
  //   this.pieChartForm.reset()
  //  this.ctx.destroy();
  // }
  private prepareChart() {
    this.ctx = document.getElementById('myChart');
    this.config = {
      type: 'pie',
      options: {
      },
      data: {
        labels: ['A', 'B'],
        datasets: [{
          label: 'Chart Data',
          data: this.chartData,
          borderWidth: 5,
          borderColor: 'grey',
          backgroundColor: ['yellow', 'blue']
        }],
      }
    }
    this.myChart = new Chart(this.ctx, this.config);
    console.log(this.myChart);
  }
  

}
