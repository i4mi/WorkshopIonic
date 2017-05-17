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
  data: Array<string> = [];



  constructor(public navCtrl: NavController, public navParams: NavParams, private ngZone: NgZone) {
    this.items = [];
    this.data = [];

    midata = new Midata('https://test.midata.coop:9000', 'Name', 'AppSecret');

    // Login in BodyWeight FHIR-Request

    // for (let i = 1; i < 11; i++) {
    //   this.items.push({
    //     title: 'Item ' + i,
    //     note: 'This is item #' + i,
    //   });
    // }
  }
// TODO : SEARCH FOR ALL BODYWEIGHTS WITH THIS LOINC http://loinc.org|3141-9
  updateWeight(){
    //this.items = [];
    midata.login('name@example.ch', 'Password').then(function() {
      midata.search('Observation', {code: "http://loinc.org|3141-9"}).then(function(resources) {
        this.ngZone.run(() => {
          for(let i in resources){
            console.info(resources[i].toJson().valueQuantity.value);
            for (let i = 1; i < 11; i++) {
              this.items.push({
                title: 'Item ' + i,
                note: 'This is item #' + i
              });
            }
          }
        });
      });
    });
  }
}
