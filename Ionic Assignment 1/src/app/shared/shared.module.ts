import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from '../header/header.component';
import { FooterComponent } from '../footer/footer.component';
import { HomeHeaderComponent } from '../home-header/home-header.component';



@NgModule({
  declarations: [HeaderComponent, FooterComponent, HomeHeaderComponent],
  imports: [
    CommonModule
  ],
  exports: [HeaderComponent, FooterComponent, HomeHeaderComponent]
})
export class SharedModule { }
