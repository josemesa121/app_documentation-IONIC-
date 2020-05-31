import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ResendValidateUserPage } from './resend-validate-user.page';

describe('ResendValidateUserPage', () => {
  let component: ResendValidateUserPage;
  let fixture: ComponentFixture<ResendValidateUserPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ResendValidateUserPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ResendValidateUserPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
