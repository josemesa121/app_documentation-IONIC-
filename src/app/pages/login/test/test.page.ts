import { Component, OnInit } from '@angular/core';

import { MsalService } from 'src/app/services/msal.service';

@Component({
  selector: 'app-test',
  templateUrl: './test.page.html',
  styleUrls: ['./test.page.scss'],
})
export class TestPage implements OnInit {

  constructor(
    public msalService: MsalService
  ) { }

  ngOnInit() {
  }

}
