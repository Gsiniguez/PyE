import { Component, ViewChild } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Chart } from 'chart.js'

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  @ViewChild('barCanvas') barCanvas;

  barChart: any;

  e1=35
  e2=16

  t1=80
  t2=70

  constructor(public navCtrl: NavController) {

  }

  ionViewDidLoad() {

    this.barChart = new Chart(this.barCanvas.nativeElement, {

      type: 'bar',
      data: {
        labels: ["Fumadores", "No Fumadores"],
        datasets: [{
          label: '#Enfermos',
          //data: [35, 16],
          data: [this.e1, this.e2],
          backgroundColor: [
            'rgba(255, 99, 132, 0.2)',
            'rgba(255, 99, 132, 0.2)',
          ],
          borderColor: [
            'rgba(255,99,132,1)',
            'rgba(255,99,132,1)',
          ],
          borderWidth: 1
        }, {
          label: '#Total',
          //data: [80, 70],
          data: [this.t1, this.t2],
          backgroundColor: [
            'rgba(54, 162, 235, 0.2)',
            'rgba(54, 162, 235, 0.2)',
          ],
          borderColor: [
            'rgba(54, 162, 235, 1)',
            'rgba(54, 162, 235, 1)',
          ],
          borderWidth: 1
        }]
      },
      options: {
        scales: {
          yAxes: [{
            ticks: {
              beginAtZero: true
            }
          }]
        }
      }

    });

  }
}




// a = [2,1,9,4,3]
// 0,1,2,3,4
// int x = 9
// for(i=0 ; i < 5 ; i++ ){
//
// if (x == a[i]){
//  return 0
//}
//}