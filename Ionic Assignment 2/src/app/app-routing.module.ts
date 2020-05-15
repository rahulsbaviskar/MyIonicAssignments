import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { CoursemanagementPage } from './coursemanagement/coursemanagement.page';
import { AdminHomePage } from './admin-home/admin-home.page';
import { CoursecategoryPage } from './coursecategory/coursecategory.page';

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
    component: AdminHomePage,
    data: {
      breadcrumb: 'Home'
    },
    children: [
      {
        path: '',
        loadChildren: () => import('./admin-home/admin-home.module').then( m => m.AdminHomePageModule),
      },
      {
        path: 'coursemanagement',
        component: CoursemanagementPage,
        data: {
          breadcrumb: 'Course Management'
        },
        children: [
          {
            path: '',
            loadChildren: () => import('./coursemanagement/coursemanagement.module').then( m => m.CoursemanagementPageModule),
          },
          {
            path: 'coursecategory',
            component: CoursecategoryPage,
            children: [
              {
                path: '',
                loadChildren: () => import('./coursecategory/coursecategory.module').then( m => m.CoursecategoryPageModule),
                data: {
                  breadcrumb: 'Course Category'
                },
              },
            ]
          },
        ]
      }

    ]
  },
  {
    path: 'admin-home/coursemanagement/coursecategory',
    loadChildren: () => import('./coursecategory/coursecategory.module').then( m => m.CoursecategoryPageModule),
  },
  // {
  //   path: 'admin-home/coursemanagement',
  //   loadChildren: () => import('./coursemanagement/coursemanagement.module').then( m => m.CoursemanagementPageModule)
  // },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
