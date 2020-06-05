import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/core/data.service';
import { Location } from '@angular/common';
import { coursection } from 'src/core/model/coursesection.model';
import { Router } from '@angular/router';
import { NGXLogger } from 'ngx-logger';

@Component({
  selector: 'app-add-course-section',
  templateUrl: './add-course-section.page.html',
  styleUrls: ['./add-course-section.page.scss'],
})
export class AddCourseSectionPage implements OnInit {

  showMyContainer: boolean = false;
  courseSection1: coursection;
  constructor(private service: DataService,private router: Router, private location: Location, private logger : NGXLogger) {
    this.courseSection1 = new coursection();
   }

  ngOnInit() {
  }

  next(){
    this.service.saveCourseSection(this.courseSection1);
    this.router.navigateByUrl('/admin-home/coursemanagement/coursesection');
    this.logger.log("Navigation");
  }
}
