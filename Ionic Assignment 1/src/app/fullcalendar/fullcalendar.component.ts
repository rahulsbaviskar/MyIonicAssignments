import { Component, OnInit, Input, ViewChild } from '@angular/core';

// import * as $ from 'jquery';
// import * as moment from 'moment';
// import 'fullcalendar';

import { CalendarComponent } from 'ng-fullcalendar';
import { OptionsInput } from '@fullcalendar/core';
import dayGridPlugin from '@fullcalendar/daygrid';
import interactionPlugin from '@fullcalendar/interaction';

@Component({
  selector: 'app-fullcalendar',
  templateUrl: './fullcalendar.component.html',
  styleUrls: ['./fullcalendar.component.scss'],
})
export class FullcalendarComponent implements OnInit {
  options: OptionsInput;
  eventsModel: any;
  
  ngOnInit(){
    this.options = {
      editable: true,
      events: [{
        title: 'Long Event',
        start: this.yearMonth + '-07',
        end: this.yearMonth + '-10'
      }],
      header: {
        left: 'prev,next today myCustomButton',
        center: 'title',
        right: 'dayGridMonth,timeGridWeek,timeGridDay'
      },
      plugins: [dayGridPlugin, interactionPlugin]
    };
  }

  eventClick(model: any){
    console.log(model);
  }
  eventDragStop(model: any){
    console.log(model);
  }
  dateClick(model: any){
    console.log(model);
  }
  updateEvents(){
    this.eventsModel = [{
      title: 'Updaten Event',
      start: this.yearMonth + '-08',
      end: this.yearMonth + '-10'
    }];
  }
  get yearMonth(): string {
    const dateObj =new Date();
    return dateObj.getUTCFullYear() + '-' + (dateObj.getUTCMonth() + 1);
  }
 

}
