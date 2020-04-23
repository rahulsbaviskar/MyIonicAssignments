import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { AppLandingPage } from './app-landing.page';

describe('AppLandingPage', () => {
  let component: AppLandingPage;
  let fixture: ComponentFixture<AppLandingPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AppLandingPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(AppLandingPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
