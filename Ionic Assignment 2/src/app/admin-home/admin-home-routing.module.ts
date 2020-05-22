import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AdminHomePage } from './admin-home.page';

const routes: Routes = [
  {
    path: '',
    component: AdminHomePage
  },
  {
    path: 'coursemanagement',
    loadChildren: () => import('./coursemanagement/coursemanagement.module').then( m => m.CoursemanagementPageModule),
    data: {
      breadcrumb: 'Course Management'
    }
  },

  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AdminHomePageRoutingModule {}
