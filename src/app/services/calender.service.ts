import { eDate } from '../enum/date.enum';
import { Injectable } from '@angular/core';
import { ICalender } from '../interface/icalender';


@Injectable({
  providedIn: 'root'
})
export class CalenderService {

 
  private weekCollection: ICalender[] = [];
  private fullCalender: any[] = [];
  constructor() { }


  public getCalender(year: number, month: number): any {
    debugger;
    this.fullCalender = [];
    this.weekCollection = [];
    let givenMonth = new Date(year, month);
    let getGivenMonthStartday = givenMonth.getDay();
    let getGivenMonthEndDate = new Date(givenMonth.getFullYear(), givenMonth.getMonth() + 1, 0).getDate();
    let getPreviousMonthEndDate = new Date(givenMonth.getFullYear(), givenMonth.getMonth(), 0).getDate();

    this.getPreviousMonthDate( getGivenMonthStartday, getPreviousMonthEndDate);
    this.getGivenMonthDate(getGivenMonthEndDate);
    this.getNextMonthDate();
    return this.fullCalender;

  }

  private getPreviousMonthDate(getGivenMonthStartday: number, getPreviousMonthEndDate: number) {
   
    let day: ICalender;
    let balanceWeekDays = getGivenMonthStartday - 1;
    let count = balanceWeekDays;
    for (var i = 0; i <= count; i++) {

      day = { title: (getPreviousMonthEndDate - balanceWeekDays).toString() }
      balanceWeekDays--;
      this.weekCollection.push(day);

    }
    
  }
  private getGivenMonthDate(givenMonthEndDate: number) {
    let date: ICalender;
    for (var i = 1; i <= givenMonthEndDate; i++) {
      date = { title: i.toString() };
      this.weekCollection.push(date);
      if (this.weekCollection.length % 7 == 0) {

        this.fullCalender.push(this.weekCollection);
        this.weekCollection = [];
      }
    }

  }
 private getNextMonthDate() {
    let date: ICalender;
    if (this.weekCollection.length > 0) {

      let balanceCount = 8 - this.weekCollection.length;

      for (var i = 1; i < balanceCount; i++) {
        //this.calender=null;
        date = { title: i.toString() };
        this.weekCollection.push(date);

      }

      this.fullCalender.push(this.weekCollection);
    }
  }

 public getCurrentDateMonthYear(){

     let date=new Date().getDate();
     let month=new Date().getMonth();
     let year=new Date().getFullYear();

     return {"Date":date,"Month":month,"Year":year}

  }

}
