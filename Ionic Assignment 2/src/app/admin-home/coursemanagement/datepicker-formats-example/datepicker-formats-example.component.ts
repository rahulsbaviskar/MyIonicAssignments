import { Component } from "@angular/core";


@Component({
  selector: 'app-datepicker-formats-example',
  templateUrl: './datepicker-formats-example.component.html',
  styleUrls: ['./datepicker-formats-example.component.scss'],
})
export class DatepickerFormatsExampleComponent  {

  dateFilter = (d: Date): boolean => {
    const day = d.getDay();
    // Prevent Saturday and Sunday from being selected.
    return day !== 0 && day !== 6;
  }

  myFilter(d: Date): boolean {
		const day = d.getDay();
    const month = d.getMonth();
		const todays_date = d.getDate();
		const todaysDateObject = new Date();
		const today = todaysDateObject.getDate();
    const actualMonth = todaysDateObject.getMonth();
    console.log(todays_date)

    	/** Prevent actual system date from being selected.*/
    if (month === actualMonth && todays_date === today) {
      return false;
    } else if (day !== 0 && day !== 6) {
      return true;
    } else {
      return false;
    }

		/** Prevent Saturday, Sunda.*/
//		return day !== 0 && day !== 6;
	}
}
