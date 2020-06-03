import { Injectable } from '@angular/core';
import { AdminHomePage } from './admin-home/admin-home.page';

@Injectable({
  providedIn: 'root'
})
export class MenuService {

  constructor() { }

  getMenu(): Array<any> {
    const menu = [
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
     
    ];
    return menu;
  }
}
