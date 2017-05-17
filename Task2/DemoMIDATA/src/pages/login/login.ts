import { Component, ViewChild} from '@angular/core';
import { NavController } from 'ionic-angular';
import {HomePage} from '../home/home';
import {Midata} from 'midata';
// Create a MIDATA-Object
let midata: Midata;

@Component({
  selector: 'page-login',
  templateUrl: 'login.html'
})
export class LoginPage {

  rootPage: any = HomePage;

  constructor(public navCtrl: NavController) {
     midata = new Midata('https://test.midata.coop:9000', 'Name', 'AppSecret');

  }

  // TODO : MODIFY WITH YOUR CREDENTIALS, SO THAT YOU CAN LOG IN
  login(){
    midata.login('name@example.ch', 'password').then(function() {
      console.info('User id:', midata.user.id);
      this.navCtrl.push(HomePage);
    });
  }
}
