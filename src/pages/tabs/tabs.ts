import { DashboardPage } from './../dashboard/dashboard';
import { HomePage } from './../home/home';
import { SummaryPage } from './../summary/summary';

import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-tabs',
  templateUrl: 'tabs.html',
})
export class TabsPage {
  homePage = HomePage;
  dashboardPage = DashboardPage;
  SummaryPage = SummaryPage;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

 

}
