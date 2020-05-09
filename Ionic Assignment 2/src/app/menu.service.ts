import { Injectable } from '@angular/core';
import { AdminHomePage } from './admin-home/admin-home.page';

@Injectable({
  providedIn: 'root'
})
export class MenuService {

  constructor() { }

  getMenu(): Array<any> {
    const menu = [
      // {
      //   name: 'Home',
      //   path: './admin-home',
      //   component: AdminHomePage
      // },
      // {
      //   name: 'Course Managent',
      //   path: './coursemanagement',
      //   loadChildren: () => import('./coursemanagement/coursemanagement.module').then( m => m.CoursemanagementPageModule)
      // },
      {
        name: 'Home',
        path: './admin-home',
        children: [
          {
            name: 'Course Management',
            path: './coursemanagement',
            children: [
              {
                name: 'Course Category',
                path: './coursecategory'
              }
            ]
          }
        ]
      }
      //   loadChildren: () => import('./admin-home/admin-home.module').then( m => m.AdminHomePageModule),
      //   data: {
      //     breadcrumbs: 'Home'
      //   }
      // },
      // {
      //   name: 'Course Management',
      //   path: './coursemanagement',
      //   loadChildren: () => import('./coursemanagement/coursemanagement.module').then( m => m.CoursemanagementPageModule),
      //   data: {
      //     breadcrumbs: 'Course Management'
      //   }
      // },
      // {
      //   name: 'Course Category',
      //   path: './coursecategory',
      //   loadChildren: () => import('./coursecategory/coursecategory.module').then( m => m.CoursecategoryPageModule),
        
      // },

      // {
      //   name: 'Home',
      //   path: './admin-home',
      //   children: [
      //     {
      //       name: 'CourseM',
      //       path: './coursemanagement',
      //       children: [
      //         {
      //           name: 'CourseC',
      //           path: './coursecategory'
      //         }
      //       ]
      //     }
      //   ]
      // }
    ];
    return menu;
  }
}
