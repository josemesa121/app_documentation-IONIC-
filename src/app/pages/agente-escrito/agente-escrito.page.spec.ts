import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { AgenteEscritoPage } from './agente-escrito.page';

describe('AgenteEscritoPage', () => {
  let component: AgenteEscritoPage;
  let fixture: ComponentFixture<AgenteEscritoPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AgenteEscritoPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(AgenteEscritoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
