import { Idata } from './../../data/data.interface';
import { Component, OnInit } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import data from '../../data/rawdata';

@IonicPage()
@Component({
  selector: 'page-measurement',
  templateUrl: 'measurement.html',
})
export class MeasurementPage implements OnInit {
  //dashboardTiles:{page:string, tiles:Idata[]}[];
  dashboardTiles:Idata[];

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

 ngOnInit(){
  this.dashboardTiles=data;
 }

}
