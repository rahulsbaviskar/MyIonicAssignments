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

   // date: Date = new Date();
  // datePickerSettings = {
  //   bigBanner: true,
  //   timePicker: true,
  //   format: 'dd-mm-yyyy',
  //   defaultOpen: false
  // }
  courseCategory1: coursecategory;
  showMyContainer: boolean = false;
  constructor(private router: Router, private service: DataService, private location: Location) {
    this.courseCategory1 = new coursecategory();
   }

  ngOnInit() {
  }

  next(){
    // this.router.navigateByUrl('/coursecategory');
    // console.log("before pushing");
    // console.log(this.courseCategory1);
    
    this.service.saveCourseCategory(this.courseCategory1);
    // console.log("after pushing");
    this.location.back();
  }

}
