import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { UserServiceProvider } from '../../providers/user-service/user-service';

@IonicPage()
@Component({
  selector: 'page-jueves',
  templateUrl: 'jueves.html',
})
export class JuevesPage {
  
    promos: any[] = [];
  
    constructor(public userServiceProvider: UserServiceProvider, public navCtrl: NavController) {
  
    } 
    ionViewDidLoad(){
      this.userServiceProvider.getPromos4()
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
