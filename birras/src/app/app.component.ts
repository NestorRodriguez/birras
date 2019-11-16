import { Component } from '@angular/core';

import { Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss']
})
export class AppComponent {
  public appPages = [
    {
      title: 'Login',
      url: '/login',
      icon: 'contact'
    },
    {
      title: 'Registro Bares',
      url: '/registro-bares',
      icon: 'paper'
    },
    {
      title: 'Reservas',
      url: '/reservas',
      icon: 'bookmarks'
    },
    {
      title: 'Novedades',
      url: '/novedades',
      icon: 'photos'
    },
    {
      title: 'Registro Usuario',
      url: '/registro-usuarios',
      icon: 'paper'
    }
  ];

  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar
  ) {
    this.initializeApp();
  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }
}
