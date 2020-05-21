import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';
import { NgxSummernoteModule } from 'ngx-summernote';
import { AddCourseCategoryPageRoutingModule } from './add-course-category-routing.module';

import { AddCourseCategoryPage } from './add-course-category.page';
import { AngularDateTimePickerModule } from 'angular2-datetimepicker';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SharedModule,
    NgxSummernoteModule,
    AngularDateTimePickerModule,
    AddCourseCategoryPageRoutingModule
  ],
  declarations: [AddCourseCategoryPage]
})
export class AddCourseCategoryPageModule {}
