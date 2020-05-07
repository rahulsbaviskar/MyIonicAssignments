import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AppLandingPageRoutingModule } from './app-landing-routing.module';

import { AppLandingPage } from './app-landing.page';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    SharedModule,
    IonicModule,
    AppLandingPageRoutingModule
  ],
  declarations: [AppLandingPage]
})
export class AppLandingPageModule {}
