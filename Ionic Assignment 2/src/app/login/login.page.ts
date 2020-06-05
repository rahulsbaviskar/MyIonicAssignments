import { Component, OnInit, Injectable } from '@angular/core';
import { NavController } from '@ionic/angular';
import { AdminLogin } from 'src/core/model/login.model';
import { DataService } from 'src/core/data.service';
import { NGXLogger } from 'ngx-logger';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})

@Injectable({
  providedIn: 'root'
})
export class LoginPage implements OnInit {

    adminLogin: AdminLogin;

  constructor(private navCtrl: NavController,private service: DataService, private logger: NGXLogger) {
    this.adminLogin = new AdminLogin();
  
   }

  ngOnInit() {
  }
  
  login(){

    this.logger.debug("username",this.adminLogin.username);
    this.logger.debug("password",this.adminLogin.password);
    if(this.adminLogin.username == "admin" && this.adminLogin.password == "admin")
     {
      
      this.service.loginDetail = this.adminLogin.username;
      this.navCtrl.navigateForward('admin-home');
     }
     else {

   //  console.log("wrong user name password");
  
     this.logger.error("please check username or password!");
     }

  }


}
