import { Component, OnInit } from '@angular/core';
import { ToolbarService, LinkService, ImageService, HtmlEditorService, RichTextEditorComponent } from '@syncfusion/ej2-angular-richtexteditor';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-rte',
  templateUrl: './rte.component.html',
  styleUrls: ['./rte.component.scss'],
  providers: [ToolbarService, LinkService, ImageService, HtmlEditorService]
})
export class RteComponent implements OnInit {

  constructor() { }

  ngOnInit() {}

}
