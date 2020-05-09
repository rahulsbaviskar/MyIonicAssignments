import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-coursecategory',
  templateUrl: './coursecategory.page.html',
  styleUrls: ['./coursecategory.page.scss'],
})
export class CoursecategoryPage implements OnInit {

  showMyContainer: boolean = true;
  showMyContainer1: boolean = true;
  /**  public data = [
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

*/
expandContent = true;
data1 = [{
  'name': 'Medical Entrance Exam',
  'expanded': false
}, {
  'name': 'Engineering Entrance Exam',
  'expanded': false
}, {
  'name': 'Architect Entrance Exam',
  'expanded': false
},
]

data3 = [{
  'name': 'New Added Medical Entrance Exam',
  'expanded': false
}, {
  'name': 'New Added Engineering Entrance Exam',
  'expanded': false
}, {
  'name': 'New added Architect Entrance Exam',
  'expanded': false
},
]



data2 = [{
  'whoseData': 'Medical Entrance Exam',
  'datades': {
    'name': 'Medical UG',
   
  }
}, {
  'whoseData': 'Medical Entrance Exam',
  'datades': {
    'name': 'Medical PG',
   
  }
}, {
  'whoseData': 'Medical Entrance Exam',
  'datades': {
    'name': 'Medical Foundation',
  }
  }, {
    'whoseData': 'Engineering Entrance Exam',
    'datades': {
      'name': 'JEE Main',
    }
 }, {
      'whoseData': 'Engineering Entrance Exam',
      'datades': {
        'name': 'JEE Main',
      
      }
}
]

findDetails(data) {
  return this.data2.filter(x => x.whoseData === data.name);
}

add() {
  if (this.data3.length > 0) {
    const person = this.data3[0];
    this.data1.push(person);
    this.data3.splice(0, 1);
  }
}

reload(){
  
}

remove(id: any) {
  this.data3.push(this.data1[id]);
  this.data1.splice(id, 1);
}



/**show(){
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
*/
  title = 'angulardatatables';
  dtOptions: DataTables.Settings = {};
  ngOnInit() {
    this.dtOptions = {
      pagingType: 'full_numbers',
      pageLength: 5,
      processing: true
    };
}
load()
{
 return this.data1;
}
}
