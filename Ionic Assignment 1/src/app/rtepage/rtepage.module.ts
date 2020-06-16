import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RTEpagePageRoutingModule } from './rtepage-routing.module';

import { RTEpagePage } from './rtepage.page';
import { RichTextEditorAllModule, RichTextEditorModule } from '@syncfusion/ej2-angular-richtexteditor';
import { ButtonModule } from '@syncfusion/ej2-angular-buttons';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    IonicModule,
    SharedModule,
    RichTextEditorModule,
    RichTextEditorAllModule,
    ButtonModule,
    RTEpagePageRoutingModule
  ],
  declarations: [RTEpagePage]
})
export class RTEpagePageModule {}
