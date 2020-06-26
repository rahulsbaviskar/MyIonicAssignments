import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ParentHomePage } from './parent-home.page';

describe('ParentHomePage', () => {
  let component: ParentHomePage;
  let fixture: ComponentFixture<ParentHomePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ParentHomePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ParentHomePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
