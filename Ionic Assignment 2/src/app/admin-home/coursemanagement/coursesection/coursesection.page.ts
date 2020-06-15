import { Component, ViewChild, ElementRef,OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators} from '@angular/forms';
import {filter} from 'rxjs/operators'
import { last } from 'lodash';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import swal from 'sweetalert2/dist/sweetalert2.js'
 import 'sweetalert2/src/sweetalert2.scss'
import Swal from 'sweetalert2/dist/sweetalert2.js';
import { NavController } from '@ionic/angular';
import { SwalComponent } from '@sweetalert2/ngx-sweetalert2';
import { coursection, coursesubsection } from 'src/core/model/coursesection.model';
import { DataService } from 'src/core/data.service';
import { Router } from '@angular/router';

class RedoUndo<T> {
  past: T[] = [];
  future: T[] = [];
}

const redoUndo = new RedoUndo();

@Component({
  selector: 'app-coursesection',
  templateUrl: './coursesection.page.html',
  styleUrls: ['./coursesection.page.scss'],
})
export class CoursesectionPage implements OnInit {

  userForm: FormGroup;

  enableEdit = false;
  enableEditIndex = null;

  searchText;
  name="";
  aa:boolean=false;

  selectedRow: '';
  checkboxes: boolean[];

  filterCheckBoxes: boolean[];

  showMyContainer: boolean = false;
  showMyContainer1: boolean = true;

  state = 0;
  values 
  index

  newEmployeeClicked = false;

  @ViewChild('autoSwal') private autoSwal: SwalComponent;

  @ViewChild('modalClose') modalClose:ElementRef;

  @ViewChild('focus', { static: false }) input: ElementRef;
  public toggleButton: boolean = true;

  
  model: any = {};
  model2: any = {}; 

  addCategory() {
    this.data1.push(this.model);
    this.model = {};
  }

  addNewEmployeeBtn() {
    this.newEmployeeClicked = !this.newEmployeeClicked;
  }



findDetails(data: { name: string; }) {
  return this.data2.filter(x => x.whoseData === data.name);
}

openSmallModal() {
  
  this.navCtrl.navigateForward('add-course-category');
}


setIndex(ii){
  this.aa=ii;
  console.log
}


undo() {
  if (redoUndo.past.length === 0) return; 
  const lastState = last(redoUndo.past);
  redoUndo.past = redoUndo.past.slice(0, -1);
  redoUndo.future = [...redoUndo.future, this.state];
  console.log('future', redoUndo.future);
  this.state = lastState;
}

redo() {
  const lastState = last(redoUndo.future);
  if(!lastState) return;
  redoUndo.future = redoUndo.future.slice(0, -1); 
  redoUndo.past = [...redoUndo.past, this.state];
  console.log('past', redoUndo.past);
  this.state = lastState;
}

  title = 'angulardatatables';
  dtOptions: DataTables.Settings = {};
  ngOnInit() {
    this.userForm = new FormGroup({
		  'id': new FormControl(null),
		  'name': new FormControl(null, Validators.required)
		});

    this.checkboxes = new Array(this.data1.length);
    this.checkboxes.fill(false);
    
    this.dtOptions = {
      pagingType: 'simple_numbers',
      pageLength: 5,
      processing: true
    };
  
}

items = [];
itemCount = 0;
params = {offset: 0, limit: 10}; //Static can be changed as per your need
formFlag = 'add';
 data1 : coursection[];
 data2 : coursesubsection[];
 
  constructor(private modalService: NgbModal,private router: Router, private navCtrl: NavController,private dataService : DataService){
    this.data1 = this.dataService.courseSection;
    this.data2 = this.dataService.courseSubSection;

    redoUndo.past = [...redoUndo.past, this.state];
    this.state = this.state + 1;

    //this.itemResource.count().then(count => this.itemCount = count);
    this.reloadItems(this.params);
  }  

   reloadItems(params) {
    //this.itemResource.query(params).then(items => this.items = items);
  } 

  // special properties:
  rowClick(rowEvent) {
      console.log('Clicked: ' + rowEvent.row.item.name);
  }

  rowDoubleClick(rowEvent) {
      alert('Double clicked: ' + rowEvent.row.item.name);
  }

rowTooltip(item) { return item.jobTitle; }

//Init method

initUser(){
  //User form reset
  this.userForm.reset();
  this.formFlag = 'add';
}
//Save user's data
saveUser(){
  if(this.formFlag == 'add')
  {
    this.userForm.value.name= this.data1.length + 1;
    this.data1.unshift(this.userForm.value);
  }
  else
  {
    var index = this.data1.findIndex(x => x.name== this.userForm.value.id);
    if (index !== -1) {
      this.data1[index] = this.userForm.value;
    }
  }
  this.reloadTableManually();
  //Close modal
  this.modalClose.nativeElement.click();
  //User form reset
  this.userForm.reset();
}
//Get data while edit
getData(item)
{
  this.userForm.patchValue(item);
  this.formFlag = 'edit';
}
//Delete user's data
delData(item){
  this.data1.splice(this.data1.indexOf(item), 1);
  this.reloadTableManually();
}
//Reload table manually after add/edit
reloadTableManually(){
  this.reloadItems(this.params);
  //this.itemResource.count().then(count => this.itemCount = count);
}

//end addeded

addRow(index): void {
  var currentElement = this.data1[index];
  this.data1.splice(index, 0, currentElement);
  this.checkboxes.splice(index, 0, false);
}

setClickedRow(index) {
  this.selectedRow = index;
}

toggleSelection(event, i) {
  this.checkboxes[i] = event.target.checked;
}

    moveup()
    {
      var atleastOneSelected = this.checkboxes.some(checkbox => checkbox === true);
    
      var allSelected = this.checkboxes.every(checkbox => checkbox === true);
      if (!atleastOneSelected) {
        alert("No rows selected.")
        return;
      }
      if (allSelected) {
        alert("At least one row should be present.")
        return;
      }
    
    for (let i = this.checkboxes.length-1; i >= 0; i--) {
      // If selected, then delete that row.
      if (this.checkboxes[i]) {
        // this.data1.splice(i, 1);
        if(i == this.checkboxes.length-1){
          continue;
        }
        const temp = this.data1[i];
       this.data1[i] = this.data1[i + 1];
       this.data1[i + 1] = temp;
       this.checkboxes[i] = false;
         this.checkboxes[i+1] = true;
      }
    }
    }


    moveDown(){
      var atleastOneSelected = this.checkboxes.some(checkbox => checkbox === true);
    
      var allSelected = this.checkboxes.every(checkbox => checkbox === true);
    
      if (!atleastOneSelected) {
        alert("No rows selected.")
        return;
      }
    
      if (allSelected) {
        alert("At least one row should be present.")
        return;
      }
      
      for (let i = 0 ; i <= this.checkboxes.length-1; i++) {
        // If selected, then delete that row.
        if (this.checkboxes[i]) {
          // this.data1.splice(i, 1);
          if(i == 0){
            continue;
          }
          const temp = this.data1[i - 1];
         this.data1[i - 1] = this.data1[i];
         this.data1[i] = temp;
         this.checkboxes[i-1] = true;
         this.checkboxes[i] = false;
        }
      }
    
    }

delete() {
  var atleastOneSelected = this.checkboxes.some(checkbox => checkbox === true);

  var allSelected = this.checkboxes.every(checkbox => checkbox === true);

  if (!atleastOneSelected) {
    alert("No rows selected.")
    return;
  }

  if (allSelected) {
    alert("At least one row should be present.")
    return;
  }

  for (let i = this.checkboxes.length-1; i >= 0; i--) {
    // If selected, then delete that row.
    if (this.checkboxes[i]) {
      this.data1.splice(i, 1);
    }
  }

  // Remove entries from checkboxes array.
  this.checkboxes = this.checkboxes.filter(checkbox => checkbox === false);
  Swal.fire({
    position: 'center',
    icon: 'success',
    title: 'Course Category Deleted Successfully',
    showConfirmButton: true,
    
  })
}

  next(){
    this.router.navigateByUrl('/admin-home/coursemanagement/coursesection/add-course-section')
  }

  filterTableData(){
    this.filterCheckBoxes = new Array();
  }
}
