import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-coursecategory',
  templateUrl: './coursecategory.page.html',
  styleUrls: ['./coursecategory.page.scss'],
})
export class CoursecategoryPage implements OnInit {

  constructor() { }

  public data = [
    {name: 'Medical Entrance Exam'},
    {name: 'Engineering Entrance Exam'},
    {name: 'Architect Entrance Exam'},
    {name: 'LLB Exam'},
];

public hidedata = [
  {name: 'Medical UG'},
  {name: 'Engineering Entrance Exam'},
  {name: 'Architect Entrance Exam'},
  {name: 'therichpost'},
];

public newdata = [
  {name: 'New Medical Entrance Exam'},
  {name: 'New Engineering Entrance Exam'},
  {name: 'New Architect Entrance Exam'},
  {name: 'New therichpost'},
];

show(){
  if (this.hidedata.length > 0) {
    const person = this.hidedata[0];
    this.data.push(person);
    this.hidedata.splice(1, 3);
  }
}

remove(id: any) {
  this.newdata.push(this.data[id]);
  this.data.splice(id, 1);
}

undo(id: any) {
  this.newdata.reverse();
//  this.data.splice(id, 1);
}

add() {
  if (this.newdata.length > 0) {
    const person = this.newdata[0];
    this.data.push(person);
    this.newdata.splice(0, 1);
  }
}

  title = 'angulardatatables';
  dtOptions: DataTables.Settings = {};
  
  ngOnInit() {
    this.dtOptions = {
      pagingType: 'full_numbers',
      pageLength: 5,
      processing: true
    };
}

}
