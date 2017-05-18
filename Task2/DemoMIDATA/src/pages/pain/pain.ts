import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import {Midata, Resource} from 'midata';
let midata: Midata;

@Component({
  selector: 'page-pain',
  templateUrl: 'pain.html'
})
export class PainPage {

    painValue: number = 5; // Default is 67

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

    // TODO : Save PainValue in MIDATA. DO NOT FORGET TO CONFIRM THE CONSENT ON TEST.MIDATA.COOP
    savePain(){}

}


// {
    //              "resourceType": "Observation",
    //              "status": "final",
    //              "category": [
    //                  {
    //                      "coding": [
    //                          {
    //                              "system": "http://hl7.org/fhir/observation-category",
    //                              "code": "survey",
    //                              "display": "Survey"
    //                          }
    //                      ],
    //                      "text": "Survey"
    //                  }
    //              ],
    //              "code": {
    //                  "coding": [
    //                      {
    //                          "system": "http://loinc.org",
    //                          "code": '72514-3',
    //                          "display": 'Pain severity'
    //                      }
    //                  ]
    //              },
    //              "effectiveDateTime": new Date(),
    //              "valueQuantity": {
    //                  "value": this.painValue,
    //              }
    //     };