import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { CoursecategoryPage } from './coursecategory.page';

describe('CoursecategoryPage', () => {
  let component: CoursecategoryPage;
  let fixture: ComponentFixture<CoursecategoryPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CoursecategoryPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(CoursecategoryPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
