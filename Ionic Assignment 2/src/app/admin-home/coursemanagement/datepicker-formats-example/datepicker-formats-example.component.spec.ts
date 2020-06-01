import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { DatepickerFormatsExampleComponent } from './datepicker-formats-example.component';

describe('DatepickerFormatsExampleComponent', () => {
  let component: DatepickerFormatsExampleComponent;
  let fixture: ComponentFixture<DatepickerFormatsExampleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DatepickerFormatsExampleComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(DatepickerFormatsExampleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
