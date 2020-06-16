import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { RteComponent } from './rte.component';

describe('RteComponent', () => {
  let component: RteComponent;
  let fixture: ComponentFixture<RteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RteComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(RteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
