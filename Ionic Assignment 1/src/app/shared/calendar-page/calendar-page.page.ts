import { Component, OnInit } from '@angular/core';

import { OptionsInput } from '@fullcalendar/core';
import dayGridPlugin from '@fullcalendar/daygrid';
import interactionPlugin from '@fullcalendar/interaction';
import timeGridPlugin from '@fullcalendar/timegrid';
import listPlugin from '@fullcalendar/list';
import bootstrapPlugin from '@fullcalendar/bootstrap';
import * as moment from 'moment';
// import { Title } from '@angular/platform-browser';
// import { start } from 'repl';

@Component({
  selector: 'app-calendar-page',
  templateUrl: './calendar-page.page.html',
  styleUrls: ['./calendar-page.page.scss'],
})
export class CalendarPagePage implements OnInit {

  constructor() { }

  options: OptionsInput;
  eventsModel: any;
  
  ngOnInit(){
    this.options = {
      editable: true,
      eventLimit: true,
      events: [{
        title: 'Long Event',
        start: '2020-06-09',
        end: '2020-06-12'
      }],
      header: {
        left: 'prev,next today',
        center: 'title',
        right: 'dayGridMonth,timeGridWeek,timeGridDay'
      },
      plugins: [dayGridPlugin, interactionPlugin, timeGridPlugin, listPlugin, bootstrapPlugin],
      selectable: true,
      themeSystem: 'bootstrap',
      dateClick: function(){
        let str = prompt("Enter the event");
        let eventInput = moment(str);
        events:[{
          title: eventInput,
        }]
      }
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
