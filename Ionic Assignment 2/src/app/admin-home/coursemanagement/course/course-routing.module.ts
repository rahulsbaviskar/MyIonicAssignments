import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CoursePage } from './course.page';

const routes: Routes = [
  {
    path: '',
    component: CoursePage
  },
  {
    path: 'add-course',
    loadChildren: () => import('./add-course/add-course.module').then( m => m.AddCoursePageModule),
    data: {
      breadcrumb: 'Add Course'
    }
  },
  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CoursePageRoutingModule {}
