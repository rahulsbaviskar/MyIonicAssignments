import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { RichTextPage } from './rich-text.page';

describe('RichTextPage', () => {
  let component: RichTextPage;
  let fixture: ComponentFixture<RichTextPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RichTextPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(RichTextPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
