import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ParentHomePage } from './parent-home.page';

const routes: Routes = [
  {
    path: '',
    component: ParentHomePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ParentHomePageRoutingModule {}
