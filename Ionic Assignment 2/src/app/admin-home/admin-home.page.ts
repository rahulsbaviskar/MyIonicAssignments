import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-admin-home',
  templateUrl: './admin-home.page.html',
  styleUrls: ['./admin-home.page.scss'],
})
export class AdminHomePage implements OnInit {

  constructor(private navCtrl: NavController) { }

  ngOnInit() {
  }

  onClick(){
    this.navCtrl.navigateBack("coursemanagement");
  }

}
