import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController } from 'ionic-angular';

@Component({
  selector: 'page-reject-reason',
  templateUrl: 'reject-reason.html',
})
export class RejectReasonPage {

  constructor(public navCtrl: NavController, public navParams: NavParams,public vc:ViewController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad RejectReasonPage');
  }
 
  
  save(){
    this.vc.dismiss(1);
  }
  dismiss(){
    this.vc.dismiss();
  }
}
