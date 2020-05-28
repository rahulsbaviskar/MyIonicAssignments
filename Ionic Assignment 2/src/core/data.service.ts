import { Injectable } from '@angular/core';
import { coursecategory, coursesubcategory } from './model/coursecategory.model';
import { course } from './model/course.model';
import { coursection, coursesubsection } from './model/coursesection.model';
import { Storage } from '@ionic/storage'

const ITEMS_KEY = 'my-items';

@Injectable({
  providedIn: 'root'
})
export class DataService {

 
  courseSubSection : coursesubsection[] = [{ 'whoseData': 'Physics','datades': {'name': 'Medical UG','course': 'NEET-UG 2021'}},{'whoseData': 'Physics','datades': {'name': 'Medical UG','course': 'NEET-UG 2021'}},{'whoseData': 'Physics','datades': {'name': 'Medical UG','course': 'NEET-UG 2021'}}];

  courseSubCategory : coursesubcategory[] = [{ 'whoseData': 'Medical Entrance Exam','datades': {'name': 'Medical UG'}},{'whoseData': 'Medical Entrance Exam','datades': {'name': 'Medical UG'}},{'whoseData': 'Medical Entrance Exam','datades': {'name': 'Medical UG'}}];

  courseCategory : coursecategory[] = [{'name': 'Medical Entrance Exam'},{'name':'Engg entrance exam'},{'name':'architech entrance exam'}];
  course1 : course[] = [{'course': 'NEET-UG 2020','name': 'Medical Entrance Examination\Medical UG','startdate': '01 Jun 2019','enddate': '31 May 2020'},{'course': 'JEE-2021','name': 'Engineering Entrance Examination\Medical UG','startdate': '01 Jun 2019','enddate': '31 May 2020'},{'course': 'NEET-UG 2021','name': 'Medical Entrance Examination\Medical UG','startdate': '01 Jun 2019','enddate': '31 May 2020'}];
  courseSection : coursection[] = [{'name': 'Physics','course': 'NEET-UG 20202'},{'name': 'Chemistry','course': 'JEE-2021'},{'name': 'Biology','course': 'AIIMS-2021'}];


 

  constructor(private storage: Storage) { }

  saveCourseCategory(courseCat: coursecategory){
      // this.storage.get(ITEMS_KEY).then(() =>{
      //   if(this.courseCategory){
      //     this.courseCategory.push(courseCat);
      //     return this.storage.set(ITEMS_KEY, this.courseCategory);
      //   }
      //   else {
      //     return this.storage.set(ITEMS_KEY, [courseCat]);
      //   }
      // });
      this.courseCategory.push(courseCat);
      // console.log(this.courseCategory);
  }

  saveCourse(course: course){
    this.course1.push(course);
  }

  saveCourseSection(courseSec: coursection){
    this.courseSection.push(courseSec);
  }
}

