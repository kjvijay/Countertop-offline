import { MeasurementPage } from './../measurement/measurement';
import { Idata } from './../../data/data.interface';
import { Component, OnInit } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController, LoadingController } from 'ionic-angular';
import data from '../../data/rawdata';

@IonicPage()
@Component({
  selector: 'page-dashboard',
  templateUrl: 'dashboard.html',
})
export class DashboardPage implements OnInit {
  //dashboardTiles:{page:string, tiles:Idata[]}[];
  dashboardTiles:Idata[];

  constructor(public navCtrl: NavController, 
              public navParams: NavParams, 
              private alrtCtrl:AlertController,
              public loadingCtrl: LoadingController
            ) {
  }

 ngOnInit(){
  this.dashboardTiles=data;
 }
 itemSelected(name:string){

  let loader = this.loadingCtrl.create({
    content: "Please wait...",
    duration: 1000
  });  
  
  switch(name)  {
    case "Measurement": {
       const alert = this.alrtCtrl.create({
        title: 'Measurement',
        subTitle: 'Are you ready to measure?',
        message: 'Do you want to proceed with measuring a surface?',
        buttons: [{
          text:'Yes',
          handler:()=>{
            loader.present();
            this.navCtrl.push(MeasurementPage);
          }
        },
        {
          text: 'No',
          role: 'cancel'
        }
      ]
      });
      alert.present();
      break; 
    } case "Quartz":{
      const alert = this.alrtCtrl.create({
        title: 'Quartz',
        //subTitle: 'Are you ready to measure?',
        message: 'Do you want to proceed with selecting a Quartz surface?',
        buttons: [{
          text:'Yes',
          handler:()=>{
            loader.present();
            this.navCtrl.push(MeasurementPage);
          }
        },
        {
          text: 'No',
          role: 'cancel'
        }
      ]
      });
      alert.present();
        break; 
    } case "Granite":{
      const alert = this.alrtCtrl.create({
        title: 'Granite',
        //subTitle: 'Are you ready to measure?',
        message: 'Do you want to proceed with selecting a Granite surface?',
        buttons: [{
          text:'Yes',
          handler:()=>{
            loader.present();
            this.navCtrl.push(MeasurementPage);
          }
        },
        {
          text: 'No',
          role: 'cancel'
        }
      ]
      });
      alert.present();
        break; 
    } case "Solid Surface":{
      const alert = this.alrtCtrl.create({
        title: 'Solid Surface',
        //subTitle: 'Are you ready to measure?',
        message: 'Do you want to proceed with selecting a Solid Surface?',
        buttons: [{
          text:'Yes',
          handler:()=>{
            loader.present();
            this.navCtrl.push(MeasurementPage);
          }
        },
        {
          text: 'No',
          role: 'cancel'
        }
      ]
      });
      alert.present();
      break; 
    }case "Sinks":{
      const alert = this.alrtCtrl.create({
        title: 'Sinks',
        //subTitle: 'Are you ready to measure?',
        message: 'Do you want to proceed with selecting a sink?',
        buttons: [{
          text:'Yes',
          handler:()=>{
            loader.present();
            this.navCtrl.push(MeasurementPage);
          }
        },
        {
          text: 'No',
          role: 'cancel'
        }
      ]
      });
      alert.present();
      break; 
    }
    case "Faucets":{
      const alert = this.alrtCtrl.create({
        title: 'Faucets',
        //subTitle: 'Are you ready to measure?',
        message: 'Do you want to proceed with selecting a Faucet?',
        buttons: [{
          text:'Yes',
          handler:()=>{
            loader.present();
            this.navCtrl.push(MeasurementPage);
          }
        },
        {
          text: 'No',
          role: 'cancel'
        }
      ]
      });
      alert.present();
      break; 
    }
  }
  
 }
}
