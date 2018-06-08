import { Component, ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {Chart} from 'chart.js'
/**
 * Generated class for the Ejercicio6Page page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-ejercicio6',
  templateUrl: 'ejercicio6.html',
})
export class Ejercicio6Page {

  fi1:number=36
  fi2:number=54
  fi3:number=33
  fi4:number=18
  fi5:number=6
  fi6:number=3

  Fii1
  Fii2
  Fii3
  Fii4
  Fii5
  Fii6


  a

  @ViewChild('barCanvas') barCanvas;

  barChart: any;

  constructor(public navCtrl: NavController) {
    this.Fii1 = this.fi1
    this.Fii2 = Number(this.fi2) + Number(this.fi1)
    this.Fii3 = Number(this.Fii2) + Number(this.fi3)
    this.Fii4 = Number(this.Fii3) + Number(this.fi4)
    this.Fii5 = Number(this.Fii4) + Number(this.fi5)
    this.Fii6 = Number(this.Fii5) + Number(this.fi6)    
  }
  
  sumar1(value:number){
    this.fi1=value
    this.Fii1 = this.fi1
    this.Fii2 = Number(this.fi2) + Number(this.fi1)
    this.Fii3 = Number(this.Fii2) + Number(this.fi3)
    this.Fii4 = Number(this.Fii3) + Number(this.fi4)
    this.Fii5 = Number(this.Fii4) + Number(this.fi5)
    this.Fii6 = Number(this.Fii5) + Number(this.fi6) 
    this.update()
  }

  sumar2(value:number){
    this.fi2=value
    this.Fii1 = this.fi1
    this.Fii2 = Number(this.fi2) + Number(this.fi1)
    this.Fii3 = Number(this.Fii2) + Number(this.fi3)
    this.Fii4 = Number(this.Fii3) + Number(this.fi4)
    this.Fii5 = Number(this.Fii4) + Number(this.fi5)
    this.Fii6 = Number(this.Fii5) + Number(this.fi6) 
    this.update()
  }

  sumar3(value:number){
    this.fi3=value
    this.Fii1 = this.fi1
    this.Fii2 = Number(this.fi2) + Number(this.fi1)
    this.Fii3 = Number(this.Fii2) + Number(this.fi3)
    this.Fii4 = Number(this.Fii3) + Number(this.fi4)
    this.Fii5 = Number(this.Fii4) + Number(this.fi5)
    this.Fii6 = Number(this.Fii5) + Number(this.fi6) 
    this.update()
  }

  sumar4(value:number){
    this.fi4=value
    this.Fii1 = this.fi1
    this.Fii2 = Number(this.fi2) + Number(this.fi1)
    this.Fii3 = Number(this.Fii2) + Number(this.fi3)
    this.Fii4 = Number(this.Fii3) + Number(this.fi4)
    this.Fii5 = Number(this.Fii4) + Number(this.fi5)
    this.Fii6 = Number(this.Fii5) + Number(this.fi6) 
    this.update()
  }

  sumar5(value:number){
    this.fi5=value
    this.Fii1 = this.fi1
    this.Fii2 = Number(this.fi2) + Number(this.fi1)
    this.Fii3 = Number(this.Fii2) + Number(this.fi3)
    this.Fii4 = Number(this.Fii3) + Number(this.fi4)
    this.Fii5 = Number(this.Fii4) + Number(this.fi5)
    this.Fii6 = Number(this.Fii5) + Number(this.fi6) 
    this.update()
  }

  sumar6(value:number){
    this.fi6=value
    this.Fii1 = this.fi1
    this.Fii2 = Number(this.fi2) + Number(this.fi1)
    this.Fii3 = Number(this.Fii2) + Number(this.fi3)
    this.Fii4 = Number(this.Fii3) + Number(this.fi4)
    this.Fii5 = Number(this.Fii4) + Number(this.fi5)
    this.Fii6 = Number(this.Fii5) + Number(this.fi6) 
    this.update()
  }

  update(){    
    this.barChart.data.datasets = [{
      label: '#fi',
      data: [this.fi1, this.fi2,this.fi3,this.fi4,this.fi5,this.fi6],
      backgroundColor: [
        'rgba(255, 99, 132, 0.2)',
        'rgba(255, 99, 132, 0.2)',
        'rgba(255, 99, 132, 0.2)',
        'rgba(255, 99, 132, 0.2)',
        'rgba(255, 99, 132, 0.2)',
        'rgba(255, 99, 132, 0.2)',
      ],
      borderColor: [
        'rgba(255,99,132,1)',
        'rgba(255,99,132,1)',
        'rgba(255,99,132,1)',
        'rgba(255,99,132,1)',
        'rgba(255,99,132,1)',
        'rgba(255,99,132,1)',
      ],
      borderWidth: 1
    }, {
      label: '#Fi',
      data: [this.fi1,this.Fii2,this.Fii3,this.Fii4,this.Fii5,this.Fii6],
      backgroundColor: [
        'rgba(54, 162, 235, 0.2)',
        'rgba(54, 162, 235, 0.2)',
        'rgba(54, 162, 235, 0.2)',
        'rgba(54, 162, 235, 0.2)',
        'rgba(54, 162, 235, 0.2)',
        'rgba(54, 162, 235, 0.2)',
      ],
      borderColor: [
        'rgba(54, 162, 235, 1)',
        'rgba(54, 162, 235, 1)',
        'rgba(54, 162, 235, 1)',
        'rgba(54, 162, 235, 1)',
        'rgba(54, 162, 235, 1)',
        'rgba(54, 162, 235, 1)',
      ],
      borderWidth: 1
    }]
    this.barChart.update();
  }

  ionViewDidLoad() {


    this.barChart = new Chart(this.barCanvas.nativeElement, {

      type: 'bar',
      data: {
        labels: ["0","1", "2","3","4","5"],
        datasets: [{
          label: '#fi',
          data: [this.fi1, this.fi2,this.fi3,this.fi4,this.fi5,this.fi6],
          backgroundColor: [
            'rgba(255, 99, 132, 0.2)',
            'rgba(255, 99, 132, 0.2)',
            'rgba(255, 99, 132, 0.2)',
            'rgba(255, 99, 132, 0.2)',
            'rgba(255, 99, 132, 0.2)',
            'rgba(255, 99, 132, 0.2)',
          ],
          borderColor: [
            'rgba(255,99,132,1)',
            'rgba(255,99,132,1)',
            'rgba(255,99,132,1)',
            'rgba(255,99,132,1)',
            'rgba(255,99,132,1)',
            'rgba(255,99,132,1)',
          ],
          borderWidth: 1
        }, {
          label: '#Fi',
          data: [this.fi1,this.fi1+this.fi2,this.Fii3,this.Fii4,this.Fii5,this.Fii6],
          backgroundColor: [
            'rgba(54, 162, 235, 0.2)',
            'rgba(54, 162, 235, 0.2)',
            'rgba(54, 162, 235, 0.2)',
            'rgba(54, 162, 235, 0.2)',
            'rgba(54, 162, 235, 0.2)',
            'rgba(54, 162, 235, 0.2)',
          ],
          borderColor: [
            'rgba(54, 162, 235, 1)',
            'rgba(54, 162, 235, 1)',
            'rgba(54, 162, 235, 1)',
            'rgba(54, 162, 235, 1)',
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
