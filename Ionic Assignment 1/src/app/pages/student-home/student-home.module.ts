import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { StudentHomePageRoutingModule } from './student-home-routing.module';

import { StudentHomePage } from './student-home.page';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { SharedModule } from '../../shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    CarouselModule,
    SharedModule,
    IonicModule,
    StudentHomePageRoutingModule
  ],
  declarations: [StudentHomePage]
})
export class StudentHomePageModule {}
