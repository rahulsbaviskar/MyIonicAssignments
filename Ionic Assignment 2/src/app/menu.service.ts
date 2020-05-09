import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MenuService {

  constructor() { }

  getMenu(): Array<any> {
    const menu = [
      // {
      //   name: 'Home',
      //   path: 'admin-home',
      //   loadChildren: () => import('./admin-home/admin-home.module').then( m => m.AdminHomePageModule),
        
      // },
      // {
      //   name: 'Course Management',
      //   path: 'coursemanagement',
      //   loadChildren: () => import('./coursemanagement/coursemanagement.module').then( m => m.CoursemanagementPageModule),
        
      // },
      // {
      //   name: 'Course Category',
      //   path: 'coursecategory',
      //   loadChildren: () => import('./coursecategory/coursecategory.module').then( m => m.CoursecategoryPageModule),
        
      // },

      {
        name: 'Home',
        path: './admin-home',
        children: [
          {
            name: 'CourseM',
            path: './coursemanagement',
            children: [
              {
                name: 'CourseC',
                path: './coursecategory'
              }
            ]
          }
        ]
      }
    ];
    return menu;
  }
}
