import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { StudentDashPageRoutingModule } from './student-dash-routing.module';

import { StudentDashPage } from './student-dash.page';
import { CarouselModule } from 'ngx-owl-carousel-o';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    CarouselModule,
    IonicModule,
    StudentDashPageRoutingModule
  ],
  declarations: [StudentDashPage]
})
export class StudentDashPageModule {}
