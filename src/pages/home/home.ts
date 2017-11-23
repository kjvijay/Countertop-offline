import { DashboardPage } from './../dashboard/dashboard';
import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import {AuthService} from "../../providers/auth-service";


@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  logo="https://s3.amazonaws.com/nr-catalogs/logos/Remaplogo.png";
  branch: any = [ ]
  constructor(public navCtrl: NavController, public navParams: NavParams,public authService:AuthService) {
    this.getBranch();
  }
  getBranch() {
    this.authService.getBranch()
    .then(data => {
      this.branch = data.result;
    });
  }
  goToDashboard(){
    this.navCtrl.push(DashboardPage);
  }
}
