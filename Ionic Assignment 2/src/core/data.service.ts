import { Injectable } from '@angular/core';
import { coursecategory, coursesubcategory } from './model/coursecategory.model';
import { course } from './model/course.model';
import { coursection, coursesubsection } from './model/coursesection.model';


@Injectable({
  providedIn: 'root'
})
export class DataService {

 
  courseSubSection : coursesubsection[] = [{ 'whoseData': 'Physics','datades': {'name': 'Medical UG'}},{'whoseData': 'Physics','datades': {'name': 'Medical UG'}},{'whoseData': 'Physics','datades': {'name': 'Medical UG'}}];

  courseSubCategory : coursesubcategory[] = [{ 'whoseData': 'Medical Entrance Exam','datades': {'name': 'Medical UG'}},{'whoseData': 'Medical Entrance Exam','datades': {'name': 'Medical UG'}},{'whoseData': 'Medical Entrance Exam','datades': {'name': 'Medical UG'}}];

 courseCategory : coursecategory[] = [{'name': 'Medical Entrance Exam'},{'name':'Engg entrance exam'},{'name':'architech entrance exam'}];
 course1 : course[] = [{'course': 'NEET-UG 2020','name': 'Medical Entrance Examination\Medical UG','startdate': '01 Jun 2019','enddate': '31 May 2020'},{'course': 'NEET-UG 2020','name': 'Medical Entrance Examination\Medical UG','startdate': '01 Jun 2019','enddate': '31 May 2020'},{'course': 'NEET-UG 2020','name': 'Medical Entrance Examination\Medical UG','startdate': '01 Jun 2019','enddate': '31 May 2020'}];
 courseSection : coursection[] = [{'name': 'Physics','course': 'NEET-UG 20202'},{'name': 'Physics','course': 'NEET-UG 20202'},{'name': 'Physics','course': 'NEET-UG 20202'}];


 

  constructor() { }
}

