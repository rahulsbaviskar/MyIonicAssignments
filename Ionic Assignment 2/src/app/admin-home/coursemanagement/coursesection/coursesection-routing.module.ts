import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CoursesectionPage } from './coursesection.page';

const routes: Routes = [
  {
    path: '',
    component: CoursesectionPage
  },
  {
    path: 'add-course-section',
    loadChildren: () => import('./add-course-section/add-course-section.module').then( m => m.AddCourseSectionPageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CoursesectionPageRoutingModule {}
