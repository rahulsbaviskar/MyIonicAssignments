import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CoursesectionPage } from './coursesection.page';

const routes: Routes = [
  {
    path: '',
    component: CoursesectionPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CoursesectionPageRoutingModule {}
