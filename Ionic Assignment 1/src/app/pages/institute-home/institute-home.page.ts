import { Component, ViewChild, OnInit } from '@angular/core';
import { NavController, IonSlides } from '@ionic/angular';
import { NgbDropdownConfig } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-institute-home',
  templateUrl: './institute-home.page.html',
  styleUrls: ['./institute-home.page.scss'],
  providers: [NgbDropdownConfig]
})
export class InstituteHomePage 
{
  public iconOnlyToggled = false;
  public sidebarToggled = false;
  
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
  carouselOption1 = {
    loop: true,
    margin: 10,
    items: 1,
    nav: true,
    autoplay: true,
    autoplayTimeout: 5500,
    navText: ["<i class='ti-angle-left'></i>", "<i class='ti-angle-right'></i>"]
  }
  
  carouselOption2 = {
    center: true,
    items: 2,
    dots : false,
    loop: true,
    margin: 10,
    autoplay: true,
    autoplayTimeout: 8500,
    responsive: {
      600: {
        items: 4
      }
    }
  }
  
  carouselOption3 = {
    center: true,
    items: 2,
    nav: true,
    dots : false,
    loop: true,
    margin: 10,
    autoplay: true,
    autoplayTimeout: 5500,
    navText: ["<i class='ti-angle-left'></i>", "<i class='ti-angle-right'></i>"],
    responsive: {
      600: {
        items: 4
      }
    }
  }
  
  
  slidePrev() {
    this.slider.slidePrev();
  }
  slideNext() {
    this.slider.slideNext();
  }
  toggleSidebar() {
    let body = document.querySelector('body');
    if((!body.classList.contains('sidebar-toggle-display')) && (!body.classList.contains('sidebar-absolute'))) {
      this.iconOnlyToggled = !this.iconOnlyToggled;
      if(this.iconOnlyToggled) {
        body.classList.add('sidebar-icon-only');
      } else {
        body.classList.remove('sidebar-icon-only');
      }
    } else {
      this.sidebarToggled = !this.sidebarToggled;
      if(this.sidebarToggled) {
        body.classList.add('sidebar-hidden');
      } else {
        body.classList.remove('sidebar-hidden');
      }
    }
  }
  
  closeSettingsSidebar() {
    document.querySelector('#right-sidebar').classList.toggle('open');
  }
  
  focusInput() {
    const navbarSearchInput = <HTMLElement>document.querySelector('#navbar-search-input');
    navbarSearchInput.focus();
  }
  
  toggleRightSidebar() {
    document.querySelector('.sidebar-offcanvas').classList.toggle('active');
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
  
  login(){
    this.navCtrl.navigateForward('login');
  }
  
  }
  