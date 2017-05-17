
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
    midata = new Midata('https://test.midata.coop:9000', 'Name', 'AppSecret');

    // Login in BodyWeight FHIR-Request
    midata.login('user@example.com', 'Password').then(function() {
          console.info("Logged in successfully");
    });

  }

  // TODO : Save your BodyWeight in MIDATA. DO NOT FORGET TO CONFIRM THE CONSENT ON TEST.MIDATA.COOP
  saveWeight(){
  }


}
