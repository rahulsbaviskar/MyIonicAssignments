import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-coursemanagement',
  templateUrl: './coursemanagement.page.html',
  styleUrls: ['./coursemanagement.page.scss'],
})
export class CoursemanagementPage implements OnInit {

  constructor(private navCtrl: NavController) { }

  ngOnInit() {
  }

  onClick(){
    this.navCtrl.navigateForward("coursecategory");
  }

}
