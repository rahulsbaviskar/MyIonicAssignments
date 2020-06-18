import { Component, OnInit, ViewChild } from '@angular/core';
import { ToolbarService, LinkService, ImageService, HtmlEditorService, RichTextEditorComponent } from '@syncfusion/ej2-angular-richtexteditor';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { RteModel } from '../shared/rte.model';

@Component({
  selector: 'app-rtepage',
  templateUrl: './rtepage.page.html',
  styleUrls: ['./rtepage.page.scss'],
  providers: [ToolbarService, LinkService, ImageService, HtmlEditorService]
})
export class RTEpagePage implements OnInit {


  public tools: object = {
    type: 'MultiRow',
    items: ['Bold', 'Italic', 'Underline', 'StrikeThrough',
        'FontName', 'FontSize', 'FontColor', 'BackgroundColor',
        'LowerCase', 'UpperCase', '|',
        'Formats', 'Alignments', 'OrderedList', 'UnorderedList',
        'Outdent', 'Indent', '|',
        'CreateLink', 'Image', '|', 'ClearFormat', 'Print',
        'SourceCode', 'FullScreen', '|', 'Undo', 'Redo']
};
public pasteCleanupSettings: object = {
    prompt: true,
    plainText: false,
    keepFormat: false,
    deniedTags: ['a'],
    deniedAttrs: ['class', 'title', 'id'],
    allowedStyleProps: ['color', 'margin', 'font-size']
};



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

rteValue: FormGroup[];

butttonFlag: boolean = false;

rteArray: FormGroup[];

rteForm: FormGroup;

length: number;

// rteModel: RteModel[];

@ViewChild('fromRTE')
private rteEle: RichTextEditorComponent;

constructor() {
    // <--- inject FormBuilder
    this.rteArray = [];

}

ngOnInit(): void {
    this.rteForm = new FormGroup({
        'name': new FormControl(null, Validators.required)
    });
}

rteCreated(): void {
    console.log("hii");
    this.rteEle.element.focus();
    console.log(this.rteEle);
    console.log(this.rteForm);
}

onSubmit(): void {
    alert('Form submitted successfully');
    console.log("on submit");
    console.log(this.rteForm.value);
    this.rteArray.push(this.rteForm.value.name);
    // this.rteValue = this.rteForm.value.name;
    // console.log(this.rteValue);
    console.log(this.rteArray);
}

retrieveData() {
    console.log("retrieve data");
    this.butttonFlag = false;
    this.rteValue = [];
    this.length = this.rteArray.length - 1;
    console.log(this.rteArray);
    this.rteValue.push(this.rteArray[this.rteArray.length - 1]);

    console.log(this.rteValue);
    console.log(this.rteArray);

}

retrieveAllData() {
    console.log("retrieve all");
    this.butttonFlag = true;
    this.rteValue = [];
    this.length = this.rteArray.length - 1;
    console.log(this.rteArray);
    this.rteValue.push(this.rteArray[this.rteArray.length - 1]);
    console.log(this.rteValue);
    console.log(this.rteArray);
}

prev() {
    // this.buttton;
    if (this.length != 0) {
        this.rteValue = [];
        this.length = this.length - 1;
        this.rteValue.push(this.rteArray[this.length]);
    }
    else{
        // this.butttonFlag = false;
        alert("In the first element");
    }
        
}
next() {
    // this.buttton;
    if (this.length != (this.rteArray.length - 1)) {
        this.rteValue = [];
        this.length = this.length + 1;
        this.rteValue.push(this.rteArray[this.length]);
    }
    else{
        // this.butttonFlag = false;
        alert("In the last element");
    }
        
}

  // rteForm: FormGroup;

  // @ViewChild('fromRTE')
  // private rteEle: RichTextEditorComponent;

  // constructor() {
  //     // <--- inject FormBuilder
  // }

  // ngOnInit(): void {
  //     // this.rteForm = new FormGroup({
  //     //     'name': new FormControl(null, Validators.required)
  //     // });
  // }

  // rteCreated(): void {
  //     this.rteEle.element.focus();
  // }

  // onSubmit(): void {
  //     alert('Form submitted successfully');
  // }

}
