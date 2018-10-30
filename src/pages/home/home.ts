import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { PropriedadePage } from '../propriedade/propriedade';
import { CultivoPage } from '../cultivo/cultivo';
import { IrrigacaoPage } from '../irrigacao/irrigacao';
import { AcompanharIrrigacaoPage } from '../acompanhar-irrigacao/acompanhar-irrigacao';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController) {

  }

  public goToPropriedade():void{
    this.navCtrl.push(PropriedadePage)
  }

  public goToCultivo():void{
    this.navCtrl.push(CultivoPage)
  }

  public goToIrrigacao():void{
    this.navCtrl.push(IrrigacaoPage)
  }

  public goToAcompanharIrrigacao():void{
    this.navCtrl.push(AcompanharIrrigacaoPage)
  }

}
