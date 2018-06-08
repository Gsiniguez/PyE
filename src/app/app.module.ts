import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { MenuPage } from '../pages/menu/menu';
import { Ejercicio6Page } from '../pages/ejercicio6/ejercicio6';
import { Prob1Page } from '../pages/prob1/prob1';
import { Prob2Page } from '../pages/prob2/prob2';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    MenuPage,
    Ejercicio6Page,
    Prob1Page,
    Prob2Page,
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    MenuPage,
    Ejercicio6Page,
    Prob1Page,
    Prob2Page,
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
