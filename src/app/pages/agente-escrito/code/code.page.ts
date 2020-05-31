import { Component, OnInit } from '@angular/core';

import { environment } from 'src/environments/environment';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-code',
  templateUrl: './code.page.html',
  styleUrls: ['./code.page.scss'],
})
export class CodePage implements OnInit {

  environment: any;

  constructor(
    public dataService: DataService
  ) {
    this.environment = environment;
  }

  ngOnInit() {
  }

}
