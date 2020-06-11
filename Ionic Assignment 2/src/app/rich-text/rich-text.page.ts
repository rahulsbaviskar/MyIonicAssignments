import { Component, OnInit, ViewChild } from '@angular/core';
import { ToolbarService, LinkService, ImageService, HtmlEditorService, RichTextEditorComponent } from '@syncfusion/ej2-angular-richtexteditor';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-rich-text',
  templateUrl: './rich-text.page.html',
  styleUrls: ['./rich-text.page.scss'],
})
export class RichTextPage  {

  public inlineMode: object = { enable: true, onSelection: true };
  public toolbarSettings: Object = {
      items: ['Bold', 'Italic', 'Underline',
          'Formats', '-', 'Alignments', 'OrderedList', 'UnorderedList',
          'CreateLink']
  };
  public format: Object = {
      width: 'auto'
  };
  public fontFamily: Object = {
      width: 'auto'
  };
  


  rteForm: FormGroup;

    @ViewChild('fromRTE')
    private rteEle: RichTextEditorComponent;

    constructor() {
        // <--- inject FormBuilder
    }

    ngOnInit(): void {
        this.rteForm = new FormGroup({
            'name': new FormControl(null, Validators.required)
        });
    }

    rteCreated(): void {
        this.rteEle.element.focus();
    }

    onSubmit(): void {
        alert('Form submitted successfully');
    }
}

 