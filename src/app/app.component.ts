// Services used
import { Component, ViewChild } from '@angular/core';
import { Nav, Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

// Pages used
import { HomePage } from '../pages/home/home';
import { SummaryPage } from '../pages/summary/summary';
import { MeasurementPage } from './../pages/measurement/measurement';
import { DashboardPage } from './../pages/dashboard/dashboard';
import { ProductPage } from './../pages/product/product';
import { TabsPage } from './../pages/tabs/tabs';
import { LoginPage } from '../pages/login/login';


@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;
  rootPage:any = LoginPage;

   pages: Array<{title: string, component: any,icon:string}>;

  constructor(public platform: Platform, public statusBar: StatusBar, public splashScreen: SplashScreen) {
    this.initializeApp();

    // used for an example of ngFor and navigation
    this.pages = [
      { title: 'Username', component: TabsPage,icon:'ios-contact-outline' },
      { title: 'Order-id :', component:SummaryPage,icon:'ios-cart-outline' },
      { title: 'Home', component: TabsPage,icon:'ios-home-outline' },
      { title: 'Help', component: TabsPage,icon:'ios-help-circle-outline' },
      { title: 'Logout', component: TabsPage,icon:'ios-exit-outline' }
      ];

  }

  initializeApp() {
    this.platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }

  openPage(page) {
    // Reset the content nav to have just this page
    // we wouldn't want the back button to show in this scenario
    this.nav.setRoot(page.component);
  }
}