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

    if(this.username == "parent" && this.password == "parent")
    {
      this.navCtrl.navigateForward('parent-home');
    }else if(this.username == "student" && this.password == "student")
     {
      this.navCtrl.navigateForward('student-home');
     }
     else if(this.username == "admin" && this.password == "admin")
     {
      this.navCtrl.navigateForward('admin-home');
     }
     else if(this.username == "institute" && this.password == "institute")
     {
      this.navCtrl.navigateForward('institute-home');
     }
     else {

     console.log("wrong user name password");
     }

  }

}
