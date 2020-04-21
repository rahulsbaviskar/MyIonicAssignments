import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  public username : String;
  public password : String;


  constructor(private navCtrl: NavController) { }

  ngOnInit() {
  }
  
  login(){

    if(this.username == "Parent" && this.password == "Parent")
    {
      this.navCtrl.navigateForward('parent-home');
    }else if(this.username == "Student" && this.password == "Student")
     {
      this.navCtrl.navigateForward('student-dash');
     }else {

     console.log("wrong user name password");
     }

  }

}
