import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { IrrigacaoPage } from './irrigacao';

@NgModule({
  declarations: [
    IrrigacaoPage,
  ],
  imports: [
    IonicPageModule.forChild(IrrigacaoPage),
  ],
})
export class IrrigacaoPageModule {}
