import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { CalendarPagePage } from './calendar-page.page';

describe('CalendarPagePage', () => {
  let component: CalendarPagePage;
  let fixture: ComponentFixture<CalendarPagePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CalendarPagePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(CalendarPagePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
