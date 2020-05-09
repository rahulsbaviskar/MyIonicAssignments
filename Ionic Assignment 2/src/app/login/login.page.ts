import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  username : String = "";
  password : String = "";


  constructor(private navCtrl: NavController) { }

  ngOnInit() {
  }
  
  login(){

    if(this.username == "admin" && this.password == "admin")
     {
      this.navCtrl.navigateForward('admin-home');
     }
     else {

     console.log("wrong user name password");
     }

  }


}
