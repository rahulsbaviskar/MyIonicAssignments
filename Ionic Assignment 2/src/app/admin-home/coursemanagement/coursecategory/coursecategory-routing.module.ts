import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CoursecategoryPage } from './coursecategory.page';

const routes: Routes = [
  {
    path: '',
    component: CoursecategoryPage
  },
  {
    path: 'add-course-category',
    loadChildren: () => import('./add-course-category/add-course-category.module').then( m => m.AddCourseCategoryPageModule),
    data: {
      breadcrumb: 'Add Course Category'
    }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CoursecategoryPageRoutingModule {}
