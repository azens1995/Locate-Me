import { Component } from '@angular/core';
import { Market } from '@ionic-native/market/ngx';
import { Geolocation } from '@ionic-native/geolocation/ngx';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {
  timeZone;

  constructor(private geolocation: Geolocation) {
    this.timeZone = new Intl.DateTimeFormat().resolvedOptions().timeZone;
    console.log('The timezone retrieved is ' + this.timeZone);
  }

  ionViewWillEnter() {
    
    this.geolocation.getCurrentPosition().then((resp) => {
      // resp.coords.latitude
      // resp.coords.longitude
      console.log(`The location retrieved are : \n Latitude: ${resp.coords.latitude} & Longitude: ${resp.coords.longitude}`);
     }).catch((error) => {
       console.log('Error getting location', error);
     });

    const watch = this.geolocation.watchPosition();
    watch.subscribe((data) => {
      // data can be a set of coordinates, or an error (if an error occurred).
      // data.coords.latitude
      // data.coords.longitude
      console.log(`The coordinates retrieved are : \n Latitude: ${data.coords.latitude} & Longitude: ${data.coords.longitude}`);
     });
  }
}
