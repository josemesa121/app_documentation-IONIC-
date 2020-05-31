import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { DeviceDeletePage } from './device-delete.page';

describe('DeviceDeletePage', () => {
  let component: DeviceDeletePage;
  let fixture: ComponentFixture<DeviceDeletePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DeviceDeletePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(DeviceDeletePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
