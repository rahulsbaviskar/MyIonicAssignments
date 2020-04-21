import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ParentHomePageRoutingModule } from './parent-home-routing.module';

import { ParentHomePage } from './parent-home.page';
import { CarouselModule } from 'ngx-owl-carousel-o';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    CarouselModule,
    IonicModule,
    ParentHomePageRoutingModule
  ],
  declarations: [ParentHomePage]
})
export class ParentHomePageModule {}
