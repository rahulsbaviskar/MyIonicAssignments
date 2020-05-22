import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CoursemanagementPage } from './coursemanagement.page';

const routes: Routes = [
  {
    path: '',
    component: CoursemanagementPage
  },
  {
    path: 'coursecategory',
    loadChildren: () => import('./coursecategory/coursecategory.module').then( m => m.CoursecategoryPageModule),
    data: {
      breadcrumb: 'Course Category'
    }
  },
  {
    path: 'course',
    loadChildren: () => import('./course/course.module').then( m => m.CoursePageModule),
    data: {
      breadcrumb: 'Course'
    }
  },
  {
    path: 'coursesection',
    loadChildren: () => import('./coursesection/coursesection.module').then( m => m.CoursesectionPageModule),
    data: {
      breadcrumb: 'Course Section'
    }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CoursemanagementPageRoutingModule {}
