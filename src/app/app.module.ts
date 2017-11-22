// Services used
import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { HttpModule } from '@angular/http';
import { AuthService } from '../providers/auth-service';

// Pages used
import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { SummaryPage } from '../pages/summary/summary';
import { MeasurementPage } from './../pages/measurement/measurement';
import { DashboardPage } from './../pages/dashboard/dashboard';
import { ProductPage } from './../pages/product/product';
import { TabsPage } from './../pages/tabs/tabs';
import { LoginPage } from '../pages/login/login';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    DashboardPage,
    MeasurementPage,
    TabsPage,
    SummaryPage,
    ProductPage,
    LoginPage
  ],
  imports: [
    BrowserModule,HttpModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    DashboardPage,
    MeasurementPage,
    TabsPage,
    SummaryPage,
    LoginPage,
    ProductPage
  ],
  providers: [
    StatusBar,
    SplashScreen,AuthService,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
