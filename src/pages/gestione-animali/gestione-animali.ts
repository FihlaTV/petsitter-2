
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Component } from '@angular/core';
import { NgRedux, select, DevToolsExtension } from '@angular-redux/store';

import { ColorListState } from '../../app/shared/animali/animali.model';
import { INITIAL_STATE, colorReducer } from '../../app/shared/animali/animali.reduces';
import { ColorActions } from '../../app/shared/animali/animali.action';

import { Observable } from 'rxjs/Observable';

declare var require;

var reduxLogger = require('redux-logger');
/**
 * Generated class for the GestioneAnimaliPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-gestione-animali',
  templateUrl: 'gestione-animali.html',
})
export class GestioneAnimaliPage {

  @select() readonly colorList$: Observable<ColorListState>;

  constructor( public store: NgRedux<ColorListState>, public colorActions: ColorActions, public devTools: DevToolsExtension) {

    store.configureStore(
      colorReducer,
      INITIAL_STATE,
      [ reduxLogger.createLogger()],
      devTools.isEnabled() ? [ devTools.enhancer() ] : []);

    colorActions.loadColors();
  }
  ionViewDidLoad() {
    console.log('ionViewDidLoad GestioneAnimaliPage');
  }
  addColors() {
    this.colorActions.addColors(['purple', 'yellow']);
  }

  removeLastColor() {
    this.colorActions.removeLastColor();
  }
}
