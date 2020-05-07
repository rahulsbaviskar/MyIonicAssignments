import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { CoursemanagementPage } from './coursemanagement.page';

describe('CoursemanagementPage', () => {
  let component: CoursemanagementPage;
  let fixture: ComponentFixture<CoursemanagementPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CoursemanagementPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(CoursemanagementPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
