import { HomePage } from './../home/home';
import { Component, ViewChild } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

@Component({
  selector: 'page-login',
  templateUrl: 'login.html'
})
export class LoginPage {
  @ViewChild('email') email: any;
  private username: string;
  private password: string;
  private error: string;
   private changeView:boolean=true; 
  constructor(public navCtrl: NavController, public navParams: NavParams) {
    
  }
  login(event,item){
    this.navCtrl.push(HomePage, {
      item: item
    });
  }
  change(){
      console.log(this.changeView);
    this.changeView=!this.changeView;
    console.log("inside change function");
    return this.changeView;    
  }
}