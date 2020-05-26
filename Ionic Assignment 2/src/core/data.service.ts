import { Injectable } from '@angular/core';
import { coursecategory } from './model/coursecategory.model';
import { course } from './model/course.model';
import { coursection } from './model/coursesection.model';


@Injectable({
  providedIn: 'root'
})
export class DataService {

 courseCategory : coursecategory[] = [{'name': 'Medical Entrance Exam'},{'name':'Engg entrance exam'},{'name':'architech entrance exam'}];
 course1 : course[] = [{'course': 'NEET-UG 2020','name': 'Medical Entrance Examination\Medical UG','startdate': '01 Jun 2019','enddate': '31 May 2020'},{'course': 'NEET-UG 2020','name': 'Medical Entrance Examination\Medical UG','startdate': '01 Jun 2019','enddate': '31 May 2020'},{'course': 'NEET-UG 2020','name': 'Medical Entrance Examination\Medical UG','startdate': '01 Jun 2019','enddate': '31 May 2020'}];
 courseSection : coursection[] = [{'name': 'Physics','course': 'NEET-UG 20202'},{'name': 'Physics','course': 'NEET-UG 20202'},{'name': 'Physics','course': 'NEET-UG 20202'}];

 
 

  constructor() { }
}

