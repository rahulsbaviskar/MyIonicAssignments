import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CoursemanagementPageRoutingModule } from './coursemanagement-routing.module';
import {NgxSummernoteModule} from 'ngx-summernote';
import { CoursemanagementPage } from './coursemanagement.page';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    NgxSummernoteModule,
    IonicModule,
    SharedModule,
    CoursemanagementPageRoutingModule
  ],
  declarations: [CoursemanagementPage]
})
export class CoursemanagementPageModule {}
