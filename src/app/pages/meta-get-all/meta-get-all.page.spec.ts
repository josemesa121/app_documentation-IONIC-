import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { MetaGetAllPage } from './meta-get-all.page';

describe('MetaGetAllPage', () => {
  let component: MetaGetAllPage;
  let fixture: ComponentFixture<MetaGetAllPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MetaGetAllPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(MetaGetAllPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
