import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { CancelarPage } from './cancelar.page';

describe('CancelarPage', () => {
  let component: CancelarPage;
  let fixture: ComponentFixture<CancelarPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CancelarPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(CancelarPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
