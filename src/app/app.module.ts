import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { LunesPage } from '../pages/lunes/lunes';
import { MartesPage} from '../pages/martes/martes';
import { MiercolesPage } from '../pages/miercoles/miercoles';
import { JuevesPage } from '../pages/jueves/jueves';
import { ViernesPage } from '../pages/viernes/viernes';
import { SabadoPage } from '../pages/sabado/sabado';
import { DomingoPage } from '../pages/domingo/domingo';
import { ImagenPage } from '../pages/imagen/imagen';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { HttpClientModule } from '@angular/common/http';
import { UserServiceProvider } from '../providers/user-service/user-service';


@NgModule({
  declarations: [
    MyApp,
    HomePage,
    LunesPage,
    MartesPage,
    MiercolesPage,
    JuevesPage,
    ViernesPage,
    SabadoPage,
    DomingoPage,
    ImagenPage
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    IonicModule.forRoot(MyApp),
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    LunesPage,
    MartesPage,
    MiercolesPage,
    JuevesPage,
    ViernesPage,
    SabadoPage,
    DomingoPage,
    ImagenPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    UserServiceProvider
  ]
})
export class AppModule {}
