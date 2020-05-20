import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AddCourseCategoryPageRoutingModule } from './add-course-category-routing.module';

import { AddCourseCategoryPage } from './add-course-category.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AddCourseCategoryPageRoutingModule
  ],
  declarations: [AddCourseCategoryPage]
})
export class AddCourseCategoryPageModule {}
