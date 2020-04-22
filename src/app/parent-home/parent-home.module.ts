import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ParentHomePageRoutingModule } from './parent-home-routing.module';

import { ParentHomePage } from './parent-home.page';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    CarouselModule,
    IonicModule,
    SharedModule,
    ParentHomePageRoutingModule
  ],
  declarations: [ParentHomePage]
})
export class ParentHomePageModule {}
