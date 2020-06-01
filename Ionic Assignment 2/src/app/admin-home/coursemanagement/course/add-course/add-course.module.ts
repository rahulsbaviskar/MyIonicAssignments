import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AddCoursePageRoutingModule } from './add-course-routing.module';

import { AddCoursePage } from './add-course.page';
import { SharedModule } from 'src/app/shared/shared.module';
import { NgxSummernoteModule } from 'ngx-summernote';




@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ReactiveFormsModule,
    SharedModule,
    NgxSummernoteModule,
    AddCoursePageRoutingModule
  ],
  declarations: [AddCoursePage]
})
export class AddCoursePageModule {}
