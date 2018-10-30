import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { CultivoPage } from './cultivo';

@NgModule({
  declarations: [
    CultivoPage,
  ],
  imports: [
    IonicPageModule.forChild(CultivoPage),
  ],
})
export class CultivoPageModule {}
