import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CoursesectionPageRoutingModule } from './coursesection-routing.module';

import { CoursesectionPage } from './coursesection.page';
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

@NgModule({
  imports: [
    CommonModule,
    DataTablesModule,
    SharedModule,
    Ng2SearchPipeModule,
    NgxSummernoteModule,
    FormsModule,
    SweetAlert2Module,
    IonicModule,
    CoursesectionPageRoutingModule
  ],
  declarations: [CoursesectionPage]
})
export class CoursesectionPageModule {}
