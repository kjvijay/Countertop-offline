import { TabsPage } from './../pages/tabs/tabs';
import { MeasurementPage } from './../pages/measurement/measurement';
import { DashboardPage } from './../pages/dashboard/dashboard';
import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { SummaryPage } from '../pages/summary/summary';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    DashboardPage,
    MeasurementPage,
    TabsPage,
    SummaryPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    DashboardPage,
    MeasurementPage,
    TabsPage,
    SummaryPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
