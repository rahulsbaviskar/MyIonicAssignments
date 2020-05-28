import { Component, OnInit } from '@angular/core';
import { course } from 'src/core/model/course.model';
import { DataService } from 'src/core/data.service';
import { Location } from '@angular/common';

@Component({
  selector: 'app-add-course',
  templateUrl: './add-course.page.html',
  styleUrls: ['./add-course.page.scss'],
})
export class AddCoursePage implements OnInit {

  course1: course;
  showMyContainer: boolean = false;
  constructor(private service: DataService, private location: Location) {
    this.course1 = new course();
   }

  ngOnInit() {
  }

  next(){
    // this.router.navigateByUrl('/coursecategory');
    // console.log("before pushing");
    // console.log(this.course1);
    
    this.service.saveCourse(this.course1);
    // console.log("after pushing");
    // console.log(this.course1);
    this.location.back();
  }
}
