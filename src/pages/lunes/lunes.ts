import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, PopoverController } from 'ionic-angular';
import { UserServiceProvider } from '../../providers/user-service/user-service';
import { ImagenPage } from '../imagen/imagen';

@Component({
  selector: 'page-lunes',
  templateUrl: 'lunes.html'
})
export class LunesPage {
  
    promos: any[] = [];
  
    constructor(public userServiceProvider: UserServiceProvider, public navCtrl: NavController, public popoverCtrl: PopoverController) {
  
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
    
    openImagen(event) {
      let popover = this.popoverCtrl.create(ImagenPage);
      popover.present({
        ev: event
      });
    }

  }

  