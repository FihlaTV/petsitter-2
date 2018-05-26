import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { GestioneAnimaliPage } from './gestione-animali';

@NgModule({
  declarations: [
    GestioneAnimaliPage,
  ],
  imports: [
    IonicPageModule.forChild(GestioneAnimaliPage),
  ],
})
export class GestioneAnimaliPageModule {}
