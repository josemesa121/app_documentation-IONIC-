import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { MetaGetPage } from './meta-get.page';

describe('MetaGetPage', () => {
  let component: MetaGetPage;
  let fixture: ComponentFixture<MetaGetPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MetaGetPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(MetaGetPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
