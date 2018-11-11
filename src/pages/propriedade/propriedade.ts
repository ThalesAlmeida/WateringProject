import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController, Button } from 'ionic-angular';
import { EquipamentoPage } from '../equipamento/equipamento';


/**
 * Generated class for the PropriedadePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-propriedade',
  templateUrl: 'propriedade.html',
})
export class PropriedadePage {

  constructor(public alertCtrl:AlertController, public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad PropriedadePage');
  }

  public showAlertEquipamento():void{
    const alert = this.alertCtrl.create({
      title: 'Adicionar equipamento',
      subTitle: 'Você precisa informar dados sobre o seu equipamento',
      buttons: [
          {
            text: 'Ok',
            handler:()=>{
              this.navCtrl.push(EquipamentoPage)
            }
          }
      ]
    });
    alert.present();
  }

}
