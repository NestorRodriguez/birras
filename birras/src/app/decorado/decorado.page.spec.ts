import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { DecoradoPage } from './decorado.page';

describe('DecoradoPage', () => {
  let component: DecoradoPage;
  let fixture: ComponentFixture<DecoradoPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DecoradoPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(DecoradoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
