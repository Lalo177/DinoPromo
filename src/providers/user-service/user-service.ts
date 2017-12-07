import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

/*
  Generated class for the UserServiceProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class UserServiceProvider {

  constructor(private http: HttpClient) {
    //console.log('Hello UserServiceProvider Provider');
  }

  getPromos(){
    return this.http.get('http://127.0.0.1/webservice/GetPromotions.php?id_dia=1');
  }
  getPromos2(){
    return this.http.get('http://127.0.0.1/webservice/GetPromotions.php?id_dia=2');
  }
  getPromos3(){
    return this.http.get('http://127.0.0.1/webservice/GetPromotions.php?id_dia=3');
  }
  getPromos4(){
    return this.http.get('http://127.0.0.1/webservice/GetPromotions.php?id_dia=4');
  }
  getPromos5(){
    return this.http.get('http://127.0.0.1/webservice/GetPromotions.php?id_dia=5');
  }
  getPromos6(){
    return this.http.get('http://127.0.0.1/webservice/GetPromotions.php?id_dia=6');
  }
  getPromos7(){
    return this.http.get('http://127.0.0.1/webservice/GetPromotions.php?id_dia=7');
  }

}
