import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { InstituteHomePage } from './institute-home.page';

const routes: Routes = [
  {
    path: '',
    component: InstituteHomePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class InstituteHomePageRoutingModule {}
