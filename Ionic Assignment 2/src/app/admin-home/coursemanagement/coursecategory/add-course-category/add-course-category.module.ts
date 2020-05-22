import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AddCourseCategoryPageRoutingModule } from './add-course-category-routing.module';

import { AddCourseCategoryPage } from './add-course-category.page';
import { SharedModule } from 'src/app/shared/shared.module';
import { NgxSummernoteModule } from 'ngx-summernote';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SharedModule,
    NgxSummernoteModule,
    AddCourseCategoryPageRoutingModule
  ],
  declarations: [AddCourseCategoryPage]
})
export class AddCourseCategoryPageModule {}
