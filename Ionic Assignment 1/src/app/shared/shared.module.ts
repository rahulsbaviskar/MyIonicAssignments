import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from '../header/header.component';
import { FooterComponent } from '../footer/footer.component';
import { HomeHeaderComponent } from '../home-header/home-header.component';
import { FullcalendarComponent } from '../fullcalendar/fullcalendar.component';
import { RteComponent } from '../rte/rte.component';



@NgModule({
  declarations: [HeaderComponent, FooterComponent, HomeHeaderComponent, FullcalendarComponent, RteComponent],
  imports: [
    CommonModule
  ],
  exports: [HeaderComponent, FooterComponent, HomeHeaderComponent, FullcalendarComponent, RteComponent]
})
export class SharedModule { }
