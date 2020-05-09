import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-home-header',
  templateUrl: './home-header.component.html',
  styleUrls: ['./home-header.component.scss'],
})
export class HomeHeaderComponent implements OnInit {

  constructor(private navCtrl: NavController) { }

  ngOnInit() {}

  login(){
    this.navCtrl.navigateForward('login');
  }
  logout()
  {
    this.navCtrl.navigateForward('app-landing');
   
  }
  onClick(){
    window.location.reload();
    // window.document.location.reload();
  }

}
