import { Component, NgZone } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { Midata } from 'midata';

let midata : Midata;
@Component({
  selector: 'page-list',
  templateUrl: 'list.html'
})
export class ListPage {
  icons: string[];
  items: Array<{title: string, note: string}>;



  constructor(public navCtrl: NavController, public navParams: NavParams, private ngZone: NgZone) {

    // Create MIDATA-Object
    midata = new Midata('https://test.midata.coop:9000', 'AppName', 'AppSecret');

    // Login
    midata.login('user@example.com', 'password').then(() => {
      console.info('Logged in');
    },(error)=> {
        console.log('There was an error!', error)
    });

  }

// TODO : SEARCH FOR ALL BODYWEIGHTS WITH THIS LOINC http://loinc.org|3141-9
  updateWeight(){}
}

