import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { MenuService } from '../menu.service';
import { ActivatedRoute, Router } from '@angular/router';
import { NGXLogger } from 'ngx-logger';

@Component({
  selector: 'app-admin-home',
  templateUrl: './admin-home.page.html',
  styleUrls: ['./admin-home.page.scss'],
})
export class AdminHomePage implements OnInit {


  constructor(private navCtrl: NavController, private router: Router, private activatedRoute: ActivatedRoute,private logger : NGXLogger) { }

  ngOnInit() {
    
  }

  onClick1(){
    this.logger.log("Navigate to course management page");
    this.navCtrl.navigateForward('login/admin-home/coursemanagement');
  }

  onClick(){
  }

  login(){
    this.logger.log("Login Page loading..");
    this.navCtrl.navigateForward('login');
  }
  logout()
  {
    this.logger.log("LogOut From Andmin Home Page");
    this.navCtrl.navigateForward('app-landing');
   
  }
  
}
