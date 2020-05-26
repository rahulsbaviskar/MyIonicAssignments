import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { AdminLogin } from 'src/core/model/login.model';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

    adminLogin: AdminLogin;

  constructor(private navCtrl: NavController) {
    this.adminLogin = new AdminLogin();
   }

  ngOnInit() {
  }
  
  login(){

    if(this.adminLogin.username == "admin" && this.adminLogin.password == "admin")
     {
      this.navCtrl.navigateForward('admin-home');
     }
     else {

     console.log("wrong user name password");
     }

  }


}
