import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
// import { AdminLogin } from 'src/core/model/login.model';
import { LoginPage } from 'src/app/login/login.page';
import { DataService } from 'src/core/data.service';

@Component({
  selector: 'app-home-header',
  templateUrl: './home-header.component.html',
  styleUrls: ['./home-header.component.scss'],
})
export class HomeHeaderComponent implements OnInit {


  loginDetail: string;
  constructor(private navCtrl: NavController, private loginPage: LoginPage, private service: DataService) {
    this.loginDetail = this.service.loginDetail;
    // console.log(this.loginPage.adminLogin.username);
    // console.log(this.loginDetail);
  }

  ngOnInit() {}

  login(){
    this.navCtrl.navigateForward('login');
  }
  logout()
  {
    this.navCtrl.navigateBack('login');
   
  }
  onClick(){
    window.location.reload();
    // window.document.location.reload();
  }

}
