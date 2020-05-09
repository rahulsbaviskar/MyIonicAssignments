import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  },
  {
    path: 'login',
    loadChildren: () => import('./login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'admin-home',
    loadChildren: () => import('./admin-home/admin-home.module').then( m => m.AdminHomePageModule),
    data: {
      breadcrumbs: 'Home'
    }
  },
  {
    path: 'admin-home/coursemanagement/coursecategory',
    loadChildren: () => import('./coursecategory/coursecategory.module').then( m => m.CoursecategoryPageModule),
    data: {
      breadcrumbs: 'Course Category'
    }
  },
  {
    path: 'admin-home/coursemanagement',
    loadChildren: () => import('./coursemanagement/coursemanagement.module').then( m => m.CoursemanagementPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
