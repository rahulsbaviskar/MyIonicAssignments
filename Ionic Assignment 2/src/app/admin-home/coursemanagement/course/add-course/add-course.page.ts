import { Component, OnInit } from '@angular/core';
import { course } from 'src/core/model/course.model';
import { DataService } from 'src/core/data.service';
import { Location } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-course',
  templateUrl: './add-course.page.html',
  styleUrls: ['./add-course.page.scss'],
})
export class AddCoursePage implements OnInit {

  course1: course;
  showMyContainer: boolean = false;
  constructor(private service: DataService,private router: Router, private location: Location) {
    this.course1 = new course();
   }

  ngOnInit() {
  }

  next(){
    // this.router.navigateByUrl('/admin-home/coursemanagement/course');
    // console.log("before pushing");
    // console.log(this.course1);
    // this.course1.name = 'Medical Entrance Exam';
    this.course1.startdate = '01 Jun 2019';
    this.course1.enddate = '31 May 2020';
    this.service.saveCourse(this.course1);
    this.router.navigateByUrl('/admin-home/coursemanagement/course');
    // console.log("after pushing");
    // console.log(this.course1);
    // this.location.back();
  }
}
