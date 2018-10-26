import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController } from 'ionic-angular';

/**
 * Generated class for the PaymentSuccessfulPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

// @IonicPage()
@Component({
  selector: 'page-payment-successful',
  templateUrl: 'payment-successful.html',
})
export class PaymentSuccessfulPage {

  constructor(public navCtrl: NavController, public navParams: NavParams,public vc:ViewController) {
  }


  
 
  ionViewDidLoad() {
    console.log('ionViewDidLoad PaymentSuccessfulPage');
  }

   
  dismiss(){
    this.vc.dismiss();
  }
}
