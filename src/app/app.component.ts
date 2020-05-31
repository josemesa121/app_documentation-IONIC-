import { Component, OnInit } from '@angular/core';

import { Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

import { DataService } from './services/data.service';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss']
})
export class AppComponent implements OnInit {

  // public selectedIndex = 0;
  public appPages = [
    {
      title: 'Registro Usuario',
      url: '/registro-usuario',
      icon: 'person'
    },
    {
      title: 'Validar Usuario',
      url: '/validate-user',
      icon: 'person'
    },
    {
      title: 'Reenviar Validar Usuario',
      url: '/resend-validate-user',
      icon: 'person'
    },
    {
      title: 'Contraseña Olvidada',
      url: '/forgot-password',
      icon: 'person'
    },
    {
      title: 'Aceptar Olvido Contraseña',
      url: '/accept-forgot-password',
      icon: 'person'
    },
    {
      title: 'Cambiar Contraseña',
      url: '/change-password',
      icon: 'person'
    },
    {
      title: 'Agente Escrito',
      url: '/agente-escrito',
      icon: 'person'
    },
    {
      title: 'Obtener Usuario',
      url: '/user-get-info',
      icon: 'person'
    },
    {
      title: 'Actualizar Usuario',
      url: '/actualizar-info',
      icon: 'person'
    },
    {
      title: 'Progreso Moodle',
      url: '/progreso-moodle',
      icon: 'analytics'
    },
    {
      title: 'Registrar Dispositivo',
      url: '/device-register',
      icon: 'phone-portrait'
    },
    {
      title: 'Actualizar Dispositivo',
      url: '/device-update',
      icon: 'phone-portrait'
    },
    {
      title: 'Obtener Dispositivo',
      url: '/device-get',
      icon: 'phone-portrait'
    },
    {
      title: 'Eliminar Dispositivo',
      url: '/device-delete',
      icon: 'phone-portrait'
    },
    {
      title: 'Obtener Metas',
      url: '/meta-get-all',
      icon: 'ellipse'
    },
    {
      title: 'Obtener Meta',
      url: '/meta-get',
      icon: 'ellipse'
    },
    {
      title: 'Registrar Meta',
      url: '/meta-register',
      icon: 'ellipse'
    },
    {
      title: 'Actualizar Meta',
      url: '/meta-update',
      icon: 'ellipse'
    },
    {
      title: 'Eliminar Meta',
      url: '/meta-delete',
      icon: 'ellipse'
    },
    // {
    //   title: 'Agente Voz',
    //   url: '/agente-voz',
    //   icon: 'person'
    // }
  ];

  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar,
    public dataService: DataService
  ) {
    this.initializeApp();
  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }

  ngOnInit() {
    // const path = window.location.pathname.split('folder/')[1];
    // if (path !== undefined) {
    //   this.selectedIndex = this.appPages.findIndex(page => page.title.toLowerCase() === path.toLowerCase());
    // }
  }

}
