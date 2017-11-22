import data from '../../data/rawdata';
import { Idata } from './../../data/data.interface';
import { Component, OnInit } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the ProductPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-product',
  templateUrl: 'product.html',
})
export class ProductPage implements OnInit {
  //dashboardTiles:{page:string, tiles:Idata[]}[];
  dashboardTiles:Idata[];

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }
  
  ngOnInit(){
    this.dashboardTiles=data;
   }
  ionViewDidLoad() {
    console.log('ionViewDidLoad ProductPage');
  }

}
