import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ProgresoMoodlePage } from './progreso-moodle.page';

describe('ProgresoMoodlePage', () => {
  let component: ProgresoMoodlePage;
  let fixture: ComponentFixture<ProgresoMoodlePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProgresoMoodlePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ProgresoMoodlePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
