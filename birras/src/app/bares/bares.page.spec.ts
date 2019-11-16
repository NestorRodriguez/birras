import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { BaresPage } from './bares.page';

describe('BaresPage', () => {
  let component: BaresPage;
  let fixture: ComponentFixture<BaresPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BaresPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(BaresPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
