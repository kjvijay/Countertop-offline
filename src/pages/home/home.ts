import { DashboardPage } from './../dashboard/dashboard';
import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  logo="https://s3.amazonaws.com/nr-catalogs/logos/Remaplogo.png";
  constructor(public navCtrl: NavController) {
  }
  goToDashboard(){
    this.navCtrl.push(DashboardPage);
  }
}
