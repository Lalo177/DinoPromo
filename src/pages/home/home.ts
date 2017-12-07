import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { UserServiceProvider } from '../../providers/user-service/user-service';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  promos: any[] = [];

  constructor(public userServiceProvider: UserServiceProvider, public navCtrl: NavController) {

  } 
  ionViewDidLoad(){
    this.userServiceProvider.getPromos()
    .subscribe(
      (data) => {
        this.promos = data['promotions'];
        console.log(this.promos);
      },
      (error) =>{
        console.error(error);
      }
    )
  }
  
}
