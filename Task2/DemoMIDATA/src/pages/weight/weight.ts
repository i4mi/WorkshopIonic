
import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import {Midata, BodyWeight, Resource} from 'midata';
let midata: Midata;


@Component({
  selector: 'page-weight',
  templateUrl: 'weight.html'
})
export class WeightPage {


  weightValue: number = 67; // Default is 67


  constructor(public navCtrl: NavController) {
    // Create MIDATA-Object
    midata = new Midata('https://test.midata.coop:9000', 'AppName', 'AppSecret');

    // Login
    midata.login('user@example.com', 'password').then(() => {
      console.info('Logged in');
    },(error)=> {
        console.log('There was an error!', error)
    });
  }

  // TODO : Save your BodyWeight in MIDATA. DO NOT FORGET TO CONFIRM THE CONSENT ON TEST.MIDATA.COOP
  saveWeight(){}


}
