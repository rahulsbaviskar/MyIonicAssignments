import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AddCourseCategoryPage } from './add-course-category.page';

const routes: Routes = [
  {
    path: '',
    component: AddCourseCategoryPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AddCourseCategoryPageRoutingModule {}
