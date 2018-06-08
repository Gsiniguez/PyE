import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { HomePage } from '../home/home';
import { Ejercicio6Page } from '../ejercicio6/ejercicio6';
import { Prob1Page } from '../prob1/prob1';
import { Prob2Page } from '../prob2/prob2';

/**
 * Generated class for the MenuPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-menu',
  templateUrl: 'menu.html',
})
export class MenuPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad MenuPage');
  }

  ejercicio5(){
    this.navCtrl.push(HomePage)
  }

  ejercicio6(){
    this.navCtrl.push(Ejercicio6Page)
  }

  prob1(){
    this.navCtrl.push(Prob1Page)
  }

  prob2(){
    this.navCtrl.push(Prob2Page)
  }

}
