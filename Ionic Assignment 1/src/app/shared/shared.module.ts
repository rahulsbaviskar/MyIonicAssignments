import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from '../shared/header/header.component';
import { FooterComponent } from '../shared/footer/footer.component';
import { HomeHeaderComponent } from '../shared/home-header/home-header.component';
import { FullcalendarComponent } from '../shared/fullcalendar/fullcalendar.component';
import { RteComponent } from '../rte/rte.component';



@NgModule({
  declarations: [HeaderComponent, FooterComponent, HomeHeaderComponent, FullcalendarComponent, RteComponent],
  imports: [
    CommonModule
  ],
  exports: [HeaderComponent, FooterComponent, HomeHeaderComponent, FullcalendarComponent, RteComponent]
})
export class SharedModule { }
