import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'app-landing', pathMatch: 'full' },
 
  {
    path: 'login',
    loadChildren: () => import('./login/login.module').then( m => m.LoginPageModule)
  },
 
 {
    path: 'parent-home',
    loadChildren: () => import('./pages/parent-home/parent-home.module').then( m => m.ParentHomePageModule)
  },
  {
    path: 'student-home',
    loadChildren: () => import('./pages/student-home/student-home.module').then( m => m.StudentHomePageModule)
  },
  {
    path: 'app-landing',
    loadChildren: () => import('./pages/app-landing/app-landing.module').then( m => m.AppLandingPageModule)
  },
  {
    path: 'institute-home',
    loadChildren: () => import('./pages/institute-home/institute-home.module').then( m => m.InstituteHomePageModule)
  },
  {
    path: 'admin-home',
    loadChildren: () => import('./pages/admin-home/admin-home.module').then( m => m.AdminHomePageModule)
  },
  {
    path: 'calendar-page',
    loadChildren: () => import('./shared/calendar-page/calendar-page.module').then( m => m.CalendarPagePageModule)
  },
  {
    path: 'rtepage',
    loadChildren: () => import('./rtepage/rtepage.module').then( m => m.RTEpagePageModule)
  },


];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
