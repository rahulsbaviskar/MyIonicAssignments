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
    this.router.navigateByUrl('/admin-home/coursemanagement/coursecategory');
    
  }
  onClickCourse(){
    this.router.navigateByUrl('/admin-home/coursemanagement/course');
   
  }
  onClickCourseSection(){
    this.router.navigateByUrl('/admin-home/coursemanagement/coursesection')
    
  }

}
