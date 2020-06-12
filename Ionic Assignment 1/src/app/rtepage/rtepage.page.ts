import { Component, OnInit, ViewChild } from '@angular/core';
import { ToolbarService, LinkService, ImageService, HtmlEditorService, RichTextEditorComponent } from '@syncfusion/ej2-angular-richtexteditor';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-rtepage',
  templateUrl: './rtepage.page.html',
  styleUrls: ['./rtepage.page.scss'],
  providers: [ToolbarService, LinkService, ImageService, HtmlEditorService]
})
export class RTEpagePage implements OnInit {


  // rteForm: FormGroup;

  // @ViewChild('fromRTE')
  // private rteEle: RichTextEditorComponent;

  constructor() {
      // <--- inject FormBuilder
  }

  ngOnInit(): void {
      // this.rteForm = new FormGroup({
      //     'name': new FormControl(null, Validators.required)
      // });
  }

  // rteCreated(): void {
  //     this.rteEle.element.focus();
  // }

  // onSubmit(): void {
  //     alert('Form submitted successfully');
  // }

}
