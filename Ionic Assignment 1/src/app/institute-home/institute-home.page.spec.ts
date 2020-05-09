import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { InstituteHomePage } from './institute-home.page';

describe('InstituteHomePage', () => {
  let component: InstituteHomePage;
  let fixture: ComponentFixture<InstituteHomePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InstituteHomePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(InstituteHomePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
