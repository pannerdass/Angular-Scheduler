import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';
import { CalenderService } from '../services/calender.service';

@Component({
  selector: 'app-date-picker',
  templateUrl: './date-picker.component.html',
  styleUrls: ['./date-picker.component.css']
})
export class DatePickerComponent implements OnInit {
@ViewChild('calenderTbody')calenderBody:ElementRef;

  Collection:any[]=[];
  isYear:boolean=false;
  isMonth:boolean=false;
  isDate:boolean=false;
  yearValue:number=2020
  monthValue:number=4;
  constructor(private calenderService:CalenderService) { }

  ngOnInit() {

    this.isYear=false;
    this.isMonth=false;
    this.isDate=true;
  }



  switchToYear(){
    this.isYear=true;
    this.isMonth=false;
    this.isDate=false;
  }
  switchToMonth(){
    this.isYear=false;
    this.isMonth=true;
    this.isDate=false;
  }


  getYear(event){
//debugger;
    this.yearValue=event;
    this.switchToMonth();
  }


  getCalender(month){
    // this.isYear=false;
    // this.isMonth=false;
    // this.isDate=true;
debugger;
     console.log(this.calenderBody)
    this.monthValue=month;
    this.Collection=this.calenderService.getCalender(this.yearValue,this.monthValue)
  }
}
