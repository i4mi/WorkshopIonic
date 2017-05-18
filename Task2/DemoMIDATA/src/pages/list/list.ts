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
    // this.items = [];

    // Create MIDATA-Object
    midata = new Midata('https://test.midata.coop:9000', 'Workshop', 'secret');

    // Login
    midata.login('test@test.com', 'Testing12345').then(() => {
      console.info('Logged in');
    },(error)=> {
        console.log('There was an error!', error)
    });

  }

// TODO : SEARCH FOR ALL BODYWEIGHTS WITH THIS LOINC http://loinc.org|3141-9
  updateWeight(){
      midata.search('Observation', {code: "http://loinc.org|3141-9"}).then((resources)=> {
        this.ngZone.run(() => {
          // CLEAR ARRAY
          this.items = [];

          // GO THROUGH OBJECT
          for(let i in resources){
            console.info(resources[i].toJson().valueQuantity.value);
            // ADD IN ARRAY
            this.items.push({
                title: 'Gewicht',
                note: resources[i].toJson().valueQuantity.value +'kg'
            });
          }
        });
      });
  }
}


// for (let i = 1; i < 11; i++) {
//   this.items.push({
//     title: 'Item ' + i,
//     note: 'This is item #' + i
//   });
// }
