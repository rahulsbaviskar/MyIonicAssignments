import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CoursemanagementPageRoutingModule } from './coursemanagement-routing.module';

import { CoursemanagementPage } from './coursemanagement.page';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SharedModule,
    CoursemanagementPageRoutingModule
  ],
  declarations: [CoursemanagementPage]
})
export class CoursemanagementPageModule {}
