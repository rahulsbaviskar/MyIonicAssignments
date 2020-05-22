import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CoursesectionPageRoutingModule } from './coursesection-routing.module';

import { CoursesectionPage } from './coursesection.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CoursesectionPageRoutingModule
  ],
  declarations: [CoursesectionPage]
})
export class CoursesectionPageModule {}
