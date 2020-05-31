import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { AgenteVozPage } from './agente-voz.page';

describe('AgenteVozPage', () => {
  let component: AgenteVozPage;
  let fixture: ComponentFixture<AgenteVozPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AgenteVozPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(AgenteVozPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
