import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { Router } from '@angular/router';

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
  showMyContainer: boolean = false;
  constructor(private router: Router) { }

  ngOnInit() {
  }

  next(){
    this.router.navigateByUrl('/coursecategory');
  }

}
