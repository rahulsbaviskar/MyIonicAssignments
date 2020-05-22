import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AddCourseSectionPage } from './add-course-section.page';

const routes: Routes = [
  {
    path: '',
    component: AddCourseSectionPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AddCourseSectionPageRoutingModule {}
