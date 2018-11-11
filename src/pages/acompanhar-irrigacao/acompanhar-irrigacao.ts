import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { HomePage } from '../home/home';

/**
 * Generated class for the AcompanharIrrigacaoPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-acompanhar-irrigacao',
  templateUrl: 'acompanhar-irrigacao.html',
})
export class AcompanharIrrigacaoPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AcompanharIrrigacaoPage');
  }
  
  public goToHome():void{
    this.navCtrl.push(HomePage)
  }

}
