import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { AddCourseSectionPage } from './add-course-section.page';

describe('AddCourseSectionPage', () => {
  let component: AddCourseSectionPage;
  let fixture: ComponentFixture<AddCourseSectionPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddCourseSectionPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(AddCourseSectionPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
