import { Component, OnInit } from '@angular/core';

import { LoadingController } from '@ionic/angular';

import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-test',
  templateUrl: './test.page.html',
  styleUrls: ['./test.page.scss'],
})
export class TestPage implements OnInit {

  test = {
    email: ''
  };

  response = {};

  error = false;

  loading: any;

  constructor(
    private dataService: DataService,
    public loadingController: LoadingController
  ) { }

  ngOnInit() {
  }

  runTest() {
    this.presentLoading();
    this.response = {};
    this.error = false;

    this.dataService.resendValidateUser(this.test)
      .then(response => {
        this.response = response;
      })
      .catch(error => {
        this.error = error.response;
      })
      .then( () => {
        this.loading.dismiss();
      });
  }

  async presentLoading() {
    this.loading = await this.loadingController.create({
      message: 'Cargando...'
    });
    await this.loading.present();
  }

}
