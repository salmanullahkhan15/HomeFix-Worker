import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ModalController } from 'ionic-angular';
import { RejectReasonPage } from '../reject-reason/reject-reason';
import { PaymentSuccessfulPage } from '../payment-successful/payment-successful';
import { PaymentPage } from '../payment/payment';
import { HomePage } from '../home/home';


// @IonicPage()
@Component({
  selector: 'page-order',
  templateUrl: 'order.html',
})
export class OrderPage {
  imagesArray: any=[];

  rejectorder:boolean = false;
  acceptOrder:boolean = false;
  startMain:boolean = false;
  finMain:boolean = false;

  service_fee:boolean = false;
  sendClient:boolean = false;
  feePaid: boolean = false;
  constructor(public navCtrl: NavController, public navParams: NavParams,public modalCtrl: ModalController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad OrderPage');

    this.imagesArray = [
      {
        id: 0,
        image: "upload_image_1.png"
      },
      {
        id: 1,
        image: "upload_image_1.png"
      },
      {
        id: 2,
        image: "upload_image_1.png"
      },
      {
        id: 3,
        image: "upload_image_1.png"
      },
      {
        id: 3,
        image: "upload_image_1.png"
      },
      {
        id: 3,
        image: "upload_image_1.png"
      },
      {
        id: 3,
        image: "upload_image_1.png"
      },
      {
        id: 3,
        image: "upload_image_1.png"
      },
      {
        id: 3,
        image: "upload_image_1.png"
      }
    ]
    console.log(this.imagesArray);
  }

  gotoHome(){
    this.navCtrl.setRoot(HomePage)
  }
  acceptButton(){
    this.acceptOrder = true;
    this.startMain = true;
  }
  
  rejectbutton(){
    let modal = this.modalCtrl.create(RejectReasonPage,null, {cssClass:"rejectClass"});
    modal.onDidDismiss(data =>{
      if(data ==1){
        this.navCtrl.pop();
      }
    })
    modal.present();
  }
  startMaintainence(){
    this.startMain = false;
    this.finMain = true;
    // this.acceptOrder = false;
  }
  finishMaintainence(){
    // this.startMain = false;
    this.finMain = false;
    this.service_fee = true;
    this.sendClient = true;
  }

  sendtoClient(){
    this.sendClient = false;
    this.feePaid = true;
  }
  PaidFee(){
    this.feePaid = false;
    this.navCtrl.push(PaymentPage);
    
  }
}
