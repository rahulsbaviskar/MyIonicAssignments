import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CoursemanagementPage } from './coursemanagement.page';

const routes: Routes = [
  {
    path: '',
    component: CoursemanagementPage
  },  {
    path: 'add-course-section',
    loadChildren: () => import('./coursesection/add-course-section/add-course-section.module').then( m => m.AddCourseSectionPageModule)
  }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CoursemanagementPageRoutingModule {}
