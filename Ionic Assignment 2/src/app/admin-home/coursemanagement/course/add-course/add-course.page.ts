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

  ngOnInit() { }

// get data & Back to course page
 next(){
    this.service.saveCourse(this.course1);
    this.router.navigateByUrl('/admin-home/coursemanagement/course');
  }
}
