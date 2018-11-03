import { Component } from '@angular/core';
import { Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { TabsPage } from '../pages/tabs/tabs';
import { HomePage } from '../pages/home/home';
import { ContactPage } from '../pages/contact/contact';
import { PropriedadePage } from '../pages/propriedade/propriedade';
import { CultivoPage } from '../pages/cultivo/cultivo';
import { AcompanharIrrigacaoPage } from '../pages/acompanhar-irrigacao/acompanhar-irrigacao';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  rootPage:any = HomePage;
  home:any = HomePage;
  propriedade:any = PropriedadePage; 
  cultivo:any = CultivoPage;
  acompanharIrrigacao:any = AcompanharIrrigacaoPage;

  constructor(platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen) {
    platform.ready().then(() => {
      
    });
  }

  public openPage(opcao){
    this.rootPage = opcao
  }
}
