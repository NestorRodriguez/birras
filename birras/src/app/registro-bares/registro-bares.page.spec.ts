import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { RegistroBaresPage } from './registro-bares.page';

describe('RegistroBaresPage', () => {
  let component: RegistroBaresPage;
  let fixture: ComponentFixture<RegistroBaresPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RegistroBaresPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(RegistroBaresPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
