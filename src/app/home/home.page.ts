import { Component, ViewChild, ElementRef } from '@angular/core';
import { NavController, IonSlides } from '@ionic/angular';
import { NgbDropdownConfig } from '@ng-bootstrap/ng-bootstrap';
import { OwlOptions } from 'ngx-owl-carousel-o';


@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  providers: [NgbDropdownConfig]
})
export class HomePage {
  slideOpts = {
    initialSlide: 1,
    autoplay: true,
    slidesPerView: 1,
    spaceBetween: 0,
    centeredSlides: true,
    speed: 400
  };
 @ViewChild(IonSlides) slider: IonSlides;
  // carouselOption1 = {
  //   loop: true,
  //   margin: 10,
  //   items: 1,
  //   rtl: true,
  //   //slidesPerView: 1,
  //   nav: true,
  //   autoplay: true,
  //   autoplayTimeout: 5500,
  //   navText: ["<i class='ti-angle-left'></i>", "<i class='ti-angle-right'></i>"]
  // }
  
  slidePrev() {
    this.slider.slidePrev();
  }
  slideNext() {
    this.slider.slideNext();
  }

  // customOptions: OwlOptions = {
  //   loop: true,
  //   mouseDrag: false,
  //   touchDrag: false,
  //   pullDrag: false,
  //   dots: false,
  //   navSpeed: 700,
  //   navText: ['Previous', 'Next'],
  //   responsive: {
  //     0: {
  //       items: 1 
  //     },
  //     400: {
  //       items: 2
  //     },
  //     740: {
  //       items: 3
  //     },
  //     940: {
  //       items: 4
  //     }
  //   },
  //   nav: true
  // }
  constructor(private navCtrl: NavController, config: NgbDropdownConfig) {
    config.placement = 'bottom-right';
  }

  carouselOption1 = {
    loop: true,
    margin: 10,
    items: 1,
    nav: true,
    autoplay: true,
    autoplayTimeout: 5500,
    navText: ["<i class='ti-angle-left'></i>", "<i class='ti-angle-right'></i>"]
  }

  

  login(){
    this.navCtrl.navigateForward('login');
  }

}
