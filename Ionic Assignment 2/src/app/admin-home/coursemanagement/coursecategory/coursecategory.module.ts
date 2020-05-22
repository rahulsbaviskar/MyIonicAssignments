import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import {DataTablesModule} from 'angular-datatables';
import { SharedModule } from '../../../shared/shared.module';
// import { SearchPipe } from './SearchPipe';
import { DatePipe } from '@angular/common'
import { Ng2SearchPipeModule } from 'ng2-search-filter';
//  import Swal from 'sweetalert2/dist/sweetalert2';
  import {filter} from 'rxjs/operators'
// import { SwalComponent } from '@sweetalert2/ngx-sweetalert2';
import {NgxSummernoteModule} from 'ngx-summernote';
import { SweetAlert2Module } from '@sweetalert2/ngx-sweetalert2';
import { IonicModule } from '@ionic/angular';

import { CoursecategoryPageRoutingModule } from './coursecategory-routing.module';

import { CoursecategoryPage } from './coursecategory.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    IonicModule,
    CoursecategoryPageRoutingModule,
    DataTablesModule,
    SharedModule,
    // SearchPipe,
    Ng2SearchPipeModule,
    SweetAlert2Module,
    NgxSummernoteModule
  ],
  declarations: [CoursecategoryPage]
})
export class CoursecategoryPageModule {}
