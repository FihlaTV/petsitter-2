import { Geolocation } from '@ionic-native/geolocation';
import { GoogleMaps,
  GoogleMap,
  GoogleMapsEvent,
  Marker,
  GoogleMapsAnimation,
  MyLocation, LatLng } from '@ionic-native/google-maps';
import { Component, ViewChild, ElementRef } from '@angular/core';
import { ToastController } from 'ionic-angular';
import { NavController, Platform } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
 
  @ViewChild('map')
  private mapElement:ElementRef;
  private map:GoogleMap;
  private location:LatLng;
 
  constructor(private platform:Platform,
              private googleMaps:GoogleMaps,
              private geolocation: Geolocation) {
                this.getLocation();
  }
 
  ionViewDidLoad() {
    this.platform.ready().then(() => {
      let element = this.mapElement.nativeElement;
      this.map = GoogleMaps.create(element);
 
      this.map.one(GoogleMapsEvent.MAP_READY).then(() => {
        let options = {
          target: this.location,
          zoom: 15
        };
 
        this.map.moveCamera(options);
        setTimeout(() => {this.addMarker()}, 2000);
      });
    });
  }
  getLocation(){
    this.geolocation.getCurrentPosition().then((resp) => {
      this.location=new LatLng(resp.coords.latitude,resp.coords.longitude);
      alert('location ' + this.location);
    }).catch((error) => {
       console.log('Error getting location', error);
     });
  }
  addMarker() {
    this.map.addMarker({
      title: 'My Marker',
      icon: 'blue',
      animation: 'DROP',
      position: {
        lat: this.location.lat,
        lng: this.location.lng
      }
    })
    .then(marker => {
      marker.on(GoogleMapsEvent.MARKER_CLICK).subscribe(() => {
        alert('Marker Clicked');
      });
    });
  }
}