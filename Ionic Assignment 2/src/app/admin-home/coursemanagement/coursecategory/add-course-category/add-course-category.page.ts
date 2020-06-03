import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { Router } from '@angular/router';
import { DataService } from 'src/core/data.service';
import { coursecategory } from 'src/core/model/coursecategory.model';
import { Location } from '@angular/common';


@Component({
  selector: 'app-add-course-category',
  templateUrl: './add-course-category.page.html',
  styleUrls: ['./add-course-category.page.scss'],
})
export class AddCourseCategoryPage implements OnInit {

 
  courseCategory1: coursecategory;
  showMyContainer: boolean = false;
  constructor(private router: Router, private service: DataService, private location: Location) {
    this.courseCategory1 = new coursecategory();
   }

  ngOnInit() {
  }
// get data & go back to courseCategory page
  next(){
    
    this.service.saveCourseCategory(this.courseCategory1);
    this.router.navigateByUrl("/admin-home/coursemanagement/coursecategory");
  }

}
