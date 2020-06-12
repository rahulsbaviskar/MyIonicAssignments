import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { RTEpagePage } from './rtepage.page';

describe('RTEpagePage', () => {
  let component: RTEpagePage;
  let fixture: ComponentFixture<RTEpagePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RTEpagePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(RTEpagePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
