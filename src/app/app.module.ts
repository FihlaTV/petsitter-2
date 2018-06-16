import { HttpClientModule } from '@angular/common/http';
import { StoreModule } from '@ngrx/store';

import { LoginPage } from './../pages/login/login';
import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule, IonicPageModule } from 'ionic-angular';
import { NgReduxModule, DevToolsExtension } from '@angular-redux/store';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { ListPage } from '../pages/list/list';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { NativeGeocoder} from '@ionic-native/native-geocoder';
import {Geolocation} from '@ionic-native/geolocation';
import { GoogleMaps } from '@ionic-native/google-maps';
import { reducer } from '../reducers/animali.reducer';
import { RestService } from '../services/rest.service';
@NgModule({
  declarations: [
    MyApp,
    HomePage,
    ListPage,
    LoginPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    IonicPageModule.forChild(HomePage),
    StoreModule.forRoot({animali:reducer}),
    HttpClientModule
  
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    ListPage,
    LoginPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    GoogleMaps,
    Geolocation,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    DevToolsExtension,
    RestService
    
  ]
})
export class AppModule {}
