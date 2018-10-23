import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';


// @IonicPage()
@Component({
  selector: 'page-order',
  templateUrl: 'order.html',
})
export class OrderPage {
  imagesArray: any=[];

  constructor(public navCtrl: NavController, public navParams: NavParams) {
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

}
