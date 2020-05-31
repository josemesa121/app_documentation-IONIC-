import { Component, OnInit } from '@angular/core';

import { DataService } from 'src/app/services/data.service';
import { environment } from 'src/environments/environment';

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
