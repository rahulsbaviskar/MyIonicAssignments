import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AddCourseSectionPageRoutingModule } from './add-course-section-routing.module';

import { AddCourseSectionPage } from './add-course-section.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AddCourseSectionPageRoutingModule
  ],
  declarations: [AddCourseSectionPage]
})
export class AddCourseSectionPageModule {}
