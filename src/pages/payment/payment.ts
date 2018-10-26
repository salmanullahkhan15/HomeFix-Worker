import { HomePage } from './../home/home';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ModalController } from 'ionic-angular';
import { PaymentSuccessfulPage } from '../payment-successful/payment-successful';

/**
 * Generated class for the PaymentPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-payment',
  templateUrl: 'payment.html',
})
export class PaymentPage {

  cash:boolean = false;
  constructor(public navCtrl: NavController, public navParams: NavParams,public modalCtrl:ModalController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad PaymentPage');
  }

  gotopaymentsucces() {
    let modal = this.modalCtrl.create(PaymentSuccessfulPage,null, {cssClass:"paysucess"});
    
    modal.present();
    this.navCtrl.setRoot(HomePage)

  }

}
