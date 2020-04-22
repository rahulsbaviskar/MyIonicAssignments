import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { InstituteHomePageRoutingModule } from './institute-home-routing.module';

import { InstituteHomePage } from './institute-home.page';
import { CarouselModule } from 'ngx-owl-carousel-o';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    CarouselModule,
    IonicModule,
    InstituteHomePageRoutingModule
  ],
  declarations: [InstituteHomePage]
})
export class InstituteHomePageModule {}
