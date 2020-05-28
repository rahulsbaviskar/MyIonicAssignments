import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { MenuService } from '../menu.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-admin-home',
  templateUrl: './admin-home.page.html',
  styleUrls: ['./admin-home.page.scss'],
})
export class AdminHomePage implements OnInit {


  constructor(private navCtrl: NavController, private router: Router, private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    //this.list = this.menuService.getMenu()[1].children[0].loadChildren;
    
  }

  onClick1(){
    this.navCtrl.navigateForward('login/admin-home/coursemanagement');
  }

  onClick(){
    // window.location.reload();
    // this.router.navigate(['coursemanagement']);
    // window.document.location.reload();
    // this.navCtrl.navigateForward("admin-home/coursemanagement");
  }

  login(){
    this.navCtrl.navigateForward('login');
  }
  logout()
  {
    this.navCtrl.navigateForward('app-landing');
   
  }
  
}
