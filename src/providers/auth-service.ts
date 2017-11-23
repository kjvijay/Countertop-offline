import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import 'rxjs/add/operator/map';

/*
  Generated class for the AuthServiceProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/

let apiUrl = 'http://qa.facelifters.com/staging/countertop-offline/api/v1/login/';
let branchUrl = 'http://qa.facelifters.com/staging/countertop-offline/api/v1/branch';
@Injectable()
export class AuthService {

  constructor(public http: Http) {
    console.log('Hello AuthService Provider');
  }
  postData(credentials) {
    return new Promise((resolve, reject) => {
      let headers = new Headers();
      headers.append('cache-control','no-cache');
      headers.append('content-type', 'application/json');
      headers.append('secret-apikey','bG9naW5AMjAxNw==');
      this.http.post(apiUrl , JSON.stringify(credentials), {headers: headers})
        .subscribe(res => {
          resolve(res.json());
        }, (err) => {
          console.log(err);
          reject(err);
        });
       
    });

  }

  getBranch() {
    return new Promise((resolve, reject) => {
      let headers = new Headers();
      headers.append('cache-control','no-cache');
      headers.append('content-type', 'application/json');
      headers.append('secret-apikey','YnJhbmNoQDIwMTc==');
      this.http.get(branchUrl , {headers: headers})
        .subscribe(res => {
          resolve(res.json());
        }, (err) => {
          console.log(err);
          reject(err);
        });
       
    });

  }

}
