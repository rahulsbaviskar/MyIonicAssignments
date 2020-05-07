import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CoursemanagementPage } from './coursemanagement.page';

const routes: Routes = [
  {
    path: '',
    component: CoursemanagementPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CoursemanagementPageRoutingModule {}
