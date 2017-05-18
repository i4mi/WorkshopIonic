
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
    midata = new Midata('https://test.midata.coop:9000', 'Workshop', 'secret');

    // Login
    midata.login('test@test.com', 'Testing12345').then(() => {
      console.info('Logged in');
    },(error)=> {
        console.log('There was an error!', error)
    });

  }

  // TODO : Save your BodyWeight in MIDATA. DO NOT FORGET TO CONFIRM THE CONSENT ON TEST.MIDATA.COOP
  saveWeight(){
        // Create a BodyWeight Object and convert it to a Resource
        let weightObj = new BodyWeight(this.weightValue, new Date()) as Resource;
        // Save the Resource on Midata
        midata.save(weightObj).then(function(){
          console.info("Saved BodyWeight");
        })
  }


}
