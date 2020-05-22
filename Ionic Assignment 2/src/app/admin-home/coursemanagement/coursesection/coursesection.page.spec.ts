import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { CoursesectionPage } from './coursesection.page';

describe('CoursesectionPage', () => {
  let component: CoursesectionPage;
  let fixture: ComponentFixture<CoursesectionPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CoursesectionPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(CoursesectionPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
