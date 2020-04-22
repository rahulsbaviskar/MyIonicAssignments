import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { StudentDashPageRoutingModule } from './student-dash-routing.module';

import { StudentDashPage } from './student-dash.page';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { SharedModule } from '../shared/shared.module';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    CarouselModule,
    SharedModule,
    IonicModule,
    StudentDashPageRoutingModule
  ],
  declarations: [StudentDashPage]
})
export class StudentDashPageModule {}
