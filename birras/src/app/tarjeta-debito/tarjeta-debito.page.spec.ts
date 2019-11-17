import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { TarjetaDebitoPage } from './tarjeta-debito.page';

describe('TarjetaDebitoPage', () => {
  let component: TarjetaDebitoPage;
  let fixture: ComponentFixture<TarjetaDebitoPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TarjetaDebitoPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(TarjetaDebitoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
