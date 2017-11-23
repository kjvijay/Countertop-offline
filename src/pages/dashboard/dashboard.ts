import { MeasurementPage } from './../measurement/measurement';
import { Idata } from './../../data/data.interface';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController, LoadingController } from 'ionic-angular';
import data from '../../data/rawdata';
import {AuthService} from "../../providers/auth-service";

@IonicPage()
@Component({
  selector: 'page-dashboard',
  templateUrl: 'dashboard.html',
})
export class DashboardPage  {
  //dashboardTiles:{page:string, tiles:Idata[]}[];
  dashboardTiles:Idata[];
  category: any ;
  constructor(public navCtrl: NavController, 
    public navParams: NavParams, 
    private alrtCtrl:AlertController,
    public loadingCtrl: LoadingController,public authService:AuthService
            ) {
              
              this.getCategory();
              
  }
  imageUrl:'https://s3-us-west-2.amazonaws.com/remap-countertop/dashboard/measure.png'
  getCategory() {
    this.authService.getCategory()
    .then(data => {
      this.category = this.sortByKey(data.result, "sort_id");
      
    });
  }

  sortByKey(array, key) {
    return array.sort(function(a, b) {
        var x = a[key]; var y = b[key];
        return ((x < y) ? -1 : ((x > y) ? 1 : 0));
    });
}
  itemSelected(name:string){
     
      let loader = this.loadingCtrl.create({
        content: "Please wait...",
        duration: 1000
      });  
      
      
      const alert = this.alrtCtrl.create({
        title:name,
        //subTitle: 'Are you ready to measure?',
        message: 'Do you want to proceed with selecting a  ' + name,
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
    
    }
     
}
