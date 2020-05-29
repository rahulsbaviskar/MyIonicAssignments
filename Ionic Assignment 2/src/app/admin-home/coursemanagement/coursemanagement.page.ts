import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { Router } from '@angular/router';

@Component({
  selector: 'app-coursemanagement',
  templateUrl: './coursemanagement.page.html',
  styleUrls: ['./coursemanagement.page.scss'],
})
export class CoursemanagementPage implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

  onClickCourseCategory(){
    // this.navCtrl.navigateForward("coursecategory");
    this.router.navigateByUrl('/admin-home/coursemanagement/coursecategory');
    // this.navCtrl.navigateForward("login/admin-home/coursemanagement/coursecategory");
  }
  onClickCourse(){
    // this.navCtrl.navigateForward("coursecategory");
    this.router.navigateByUrl('/admin-home/coursemanagement/course');
    // this.navCtrl.navigateForward("login/admin-home/coursemanagement/coursecategory");
  }
  onClickCourseSection(){
    // this.navCtrl.navigateForward("coursecategory");
    this.router.navigateByUrl('/admin-home/coursemanagement/coursesection')
    // this.navCtrl.navigateForward("login/admin-home/coursemanagement/coursecategory");
  }

}
