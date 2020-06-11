import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RichTextPage } from './rich-text.page';

const routes: Routes = [
  {
    path: '',
    component: RichTextPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RichTextPageRoutingModule {}
