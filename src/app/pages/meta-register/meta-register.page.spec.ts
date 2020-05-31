import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { MetaRegisterPage } from './meta-register.page';

describe('MetaRegisterPage', () => {
  let component: MetaRegisterPage;
  let fixture: ComponentFixture<MetaRegisterPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MetaRegisterPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(MetaRegisterPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
