import { Component, OnInit, Injectable } from '@angular/core';
import { NavController } from '@ionic/angular';
import { AdminLogin } from 'src/core/model/login.model';
import { DataService } from 'src/core/data.service';
import { LogService } from '../log.service';
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

  constructor(private navCtrl: NavController,private service: DataService,private logger: LogService,private logger1: NGXLogger) {
    this.adminLogin = new AdminLogin();
   }

  ngOnInit() {
  }
  
  login(){

    if(this.adminLogin.username == "admin" && this.adminLogin.password == "admin")
     {
       this.service.loginDetail = this.adminLogin.username;
      this.navCtrl.navigateForward('admin-home');
     }
     else {

    // console.log("wrong user name password");
     this.logger.error('hello', 1);
     this.logger1.error("Error message");
     }
    

  }


}
