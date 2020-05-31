import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { MetaDeletePage } from './meta-delete.page';

describe('MetaDeletePage', () => {
  let component: MetaDeletePage;
  let fixture: ComponentFixture<MetaDeletePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MetaDeletePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(MetaDeletePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
