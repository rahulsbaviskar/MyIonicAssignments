import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FooterComponent } from './footer/footer.component';
import { HomeHeaderComponent } from './home-header/home-header.component';
import { BreadcrumbComponent } from './breadcrumb/breadcrumb.component';



@NgModule({
  declarations: [FooterComponent, HomeHeaderComponent, BreadcrumbComponent],
  imports: [
    CommonModule
  ],
  exports: [FooterComponent, HomeHeaderComponent, BreadcrumbComponent]
})
export class SharedModule { }
