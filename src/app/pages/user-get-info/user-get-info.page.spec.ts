import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { UserGetInfoPage } from './user-get-info.page';

describe('UserGetInfoPage', () => {
  let component: UserGetInfoPage;
  let fixture: ComponentFixture<UserGetInfoPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserGetInfoPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(UserGetInfoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
