import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
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
   
  }

}
