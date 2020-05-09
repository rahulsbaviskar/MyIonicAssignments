import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import {DataTablesModule} from 'angular-datatables';

import { IonicModule } from '@ionic/angular';

import { CoursecategoryPageRoutingModule } from './coursecategory-routing.module';

import { CoursecategoryPage } from './coursecategory.page';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SharedModule,
    DataTablesModule,
    CoursecategoryPageRoutingModule
  ],
  declarations: [CoursecategoryPage]
})
export class CoursecategoryPageModule {}
