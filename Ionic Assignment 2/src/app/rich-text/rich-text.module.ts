import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RichTextEditorAllModule } from '@syncfusion/ej2-angular-richtexteditor';
import { ButtonModule } from '@syncfusion/ej2-angular-buttons';
import { RichTextPageRoutingModule } from './rich-text-routing.module';

import { RichTextPage } from './rich-text.page';
import { DialogModule } from '@syncfusion/ej2-angular-popups';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    RichTextEditorAllModule,
    FormsModule,
    DialogModule,
    ButtonModule,
    ReactiveFormsModule,
    IonicModule,
    RichTextPageRoutingModule
  ],
  declarations: [RichTextPage]
})
export class RichTextPageModule {}
