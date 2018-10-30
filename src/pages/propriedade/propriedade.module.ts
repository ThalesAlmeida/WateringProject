import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { PropriedadePage } from './propriedade';

@NgModule({
  declarations: [
    PropriedadePage,
  ],
  imports: [
    IonicPageModule.forChild(PropriedadePage),
  ],
})
export class PropriedadePageModule {}
