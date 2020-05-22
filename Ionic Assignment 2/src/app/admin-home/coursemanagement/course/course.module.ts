import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CoursePageRoutingModule } from './course-routing.module';

import { CoursePage } from './course.page';
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
    FormsModule,
    SharedModule,
    NgxSummernoteModule,
    SweetAlert2Module,
    Ng2SearchPipeModule,
    IonicModule,
    CoursePageRoutingModule
  ],
  declarations: [CoursePage]
})
export class CoursePageModule {}
