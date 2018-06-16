import { RestService } from './../../services/rest.service';
import { iUser } from './../../models/user.model';
import { ADD_ANIMALI, AddAnimali } from './../../actions/animali.action';
import { AppState } from './../../state/app.state';
import { iAnimali } from './../../models/Animali';
import { Observable } from 'rxjs/Observable';//
import { HomePage } from './../home/home';
import { Component, ViewChild } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import * as AnimaliActions from '../../actions/animali.action';
import { Store } from '@ngrx/store';



@Component({
  selector: 'page-login',
  templateUrl: 'login.html'
})
export class LoginPage {
  @ViewChild('email') email: any;
  private username: string;
  private password: string;
  private error: string;
  private user= {} as iUser;

  private animaliObservable: Observable<iAnimali[]>;

  private changeView: boolean = true;
  constructor(public navCtrl: NavController, public navParams: NavParams, private store: Store<AppState>, private service: RestService
  ) {
    this.animaliObservable = this.store.select('animali');
  }
  login(event, item) {
    this.navCtrl.push(HomePage, {
      item: item
    });
  }
  change() {
    console.log(this.changeView);
    this.changeView = !this.changeView;
    console.log("inside change function");
    return this.changeView;
  }
  add(){ 
    let cane={} as iAnimali;
    cane.id=2;
    cane.razza='gatto';
    this.store.dispatch(new AnimaliActions.AddAnimali(cane));
    }
    registrati(){   
      this.service.register(this.user);
    }
}