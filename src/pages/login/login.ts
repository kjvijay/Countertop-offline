import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { TabsPage } from '../tabs/tabs';
import { ToastController } from 'ionic-angular';
import {AuthService} from "../../providers/auth-service";


/**
 * Generated class for the LoginPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {
  logo="https://s3.amazonaws.com/nr-catalogs/logos/Remaplogo.png"; 
   responseData : any;
  userData = {"loginname": "","password": ""};
  constructor(public navCtrl: NavController, public navParams: NavParams,private toastCtrl: ToastController, public authService:AuthService) {
  }


  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
  }
  login(){
    if(this.userData.loginname && this.userData.password ){
     this.authService.postData(this.userData).then((result) =>{
     this.responseData = result;
     if(this.responseData.result=='true'){
      localStorage.setItem('true',this.responseData.result )
     this.navCtrl.push(TabsPage);
     }
   else{
     this.presentToast("Please Enter a valid Username and Password");
   }
     
   }, (err) => {
      this.presentToast("Connection Failed");
     });
    }
    else{
     this.presentToast(" Enter Username and Password");
    }
   
   }
 
 
   presentToast(msg) {
     let toast = this.toastCtrl.create({
       message: msg,
       duration: 2000
     });
     toast.present();
   }
 
}
