import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AddCourseSectionPageRoutingModule } from './add-course-section-routing.module';

import { AddCourseSectionPage } from './add-course-section.page';
import { SharedModule } from 'src/app/shared/shared.module';
import { NgxSummernoteModule } from 'ngx-summernote';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SharedModule,
    NgxSummernoteModule,
    AddCourseSectionPageRoutingModule
  ],
  declarations: [AddCourseSectionPage]
})
export class AddCourseSectionPageModule {}
