import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { DeviceGetPage } from './device-get.page';

describe('DeviceGetPage', () => {
  let component: DeviceGetPage;
  let fixture: ComponentFixture<DeviceGetPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DeviceGetPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(DeviceGetPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
