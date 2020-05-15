import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import {DataTablesModule} from 'angular-datatables';
import { IonicModule } from '@ionic/angular';
import { CoursecategoryPageRoutingModule } from './coursecategory-routing.module';
import { CoursecategoryPage } from './coursecategory.page';
import { SharedModule } from '../shared/shared.module';
import { SearchPipe } from './SearchPipe';
import { DatePipe } from '@angular/common'
import { Ng2SearchPipeModule } from 'ng2-search-filter';
 
  import {filter} from 'rxjs/operators'
  


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Ng2SearchPipeModule,
    SharedModule,
    ReactiveFormsModule,
    DataTablesModule,
    CoursecategoryPageRoutingModule
  ],
  declarations: [CoursecategoryPage,SearchPipe]
})
export class CoursecategoryPageModule {}
