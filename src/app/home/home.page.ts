import { Component } from '@angular/core';
import { NavController } from '@ionic/angular';
import { NgbDropdownConfig } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  providers: [NgbDropdownConfig]
})
export class HomePage {
  // slideOpts = {
  //   initialSlide: 1,
  //   // autoPlay: true,
  //   slidesPerView: 1,
  //   spaceBetween: 0,
  //   centeredSlides: true,
  //   speed: 400
  // };
  carouselOption1 = {
    loop: true,
    margin: 10,
    items: 1,
    nav: true,
    autoplay: true,
    autoplayTimeout: 5500,
    navText: ["<i class='ti-angle-left'></i>", "<i class='ti-angle-right'></i>"]
  }
  constructor(private navCtrl: NavController, config: NgbDropdownConfig) {
    config.placement = 'bottom-right';
  }

  login(){
    this.navCtrl.navigateForward('login');
  }

}
