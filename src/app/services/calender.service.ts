import { eDate } from '../enum/date.enum';
import { Injectable } from '@angular/core';
import { ICalender } from '../interface/icalender';


@Injectable({
  providedIn: 'root'
})
export class CalenderService {

  private calender: ICalender;
  private calenderItem: ICalender[] = [];
  private fullCalender: any[] = [];
  constructor() { }


  public getCalender(year: number, month: number): any {
    debugger;
    this.fullCalender = [];
    this.calenderItem = [];
    let givenMonth = new Date(year, month);
    let getGivenMonthStartday = givenMonth.getDay();
    let getGivenMonthEndDate = new Date(givenMonth.getFullYear(), givenMonth.getMonth() + 1, 0).getDate();
    let getPreviousMonthEndDate = new Date(givenMonth.getFullYear(), givenMonth.getMonth(), 0).getDate();

    this.getPreviousMonthDate(this.calenderItem, getGivenMonthStartday, getPreviousMonthEndDate);
    this.getGivenMonthDate(this.fullCalender, this.calenderItem, getGivenMonthEndDate);
    this.getNextMonthDate(this.fullCalender, this.calenderItem);
    return this.fullCalender;

  }

  getPreviousMonthDate(weekCollection: ICalender[], getGivenMonthStartday: number, getPreviousMonthEndDate: number) {
   
    let day: ICalender;
    let balanceWeekDays = getGivenMonthStartday - 1;
    let count = balanceWeekDays;
    for (var i = 0; i <= count; i++) {

      day = { title: (getPreviousMonthEndDate - balanceWeekDays).toString() }
      balanceWeekDays--;
      weekCollection.push(day);

    }
  }
  getGivenMonthDate(fullCalender: any[], weekCollection: ICalender[], givenMonthEndDate: number) {
    let date: ICalender;
    for (var i = 1; i <= givenMonthEndDate; i++) {
      date = { title: i.toString() };
      weekCollection.push(this.calender);
      if (weekCollection.length % 7 == 0) {

        fullCalender.push(weekCollection);
        weekCollection = [];
      }
    }

  }
  getNextMonthDate(fullCalender: any[], weekCollection: ICalender[]) {
    let date: ICalender;
    if (weekCollection.length > 0) {

      let balanceCount = 8 - weekCollection.length;

      for (var i = 1; i < balanceCount; i++) {
        //this.calender=null;
        date = { title: i.toString() };
        weekCollection.push(date);

      }

      fullCalender.push(weekCollection);
    }
  }

}
