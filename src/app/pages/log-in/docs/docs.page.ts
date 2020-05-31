import { Component, OnInit } from '@angular/core';

import { environment } from 'src/environments/environment';


@Component({
  selector: 'app-docs',
  templateUrl: './docs.page.html',
  styleUrls: ['./docs.page.scss'],
})
export class DocsPage implements OnInit {

  environment: any;

  constructor() {
    this.environment = environment;
  }

  ngOnInit() {
  }

}
