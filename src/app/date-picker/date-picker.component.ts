import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-date-picker',
  templateUrl: './date-picker.component.html',
  styleUrls: ['./date-picker.component.css']
})
export class DatePickerComponent implements OnInit {
  isYear:boolean=false;
  isMonth:boolean=false;
  isDate:boolean=false;
  yearValue:string="2020"
  monthValue:string="jan"
  constructor() { }

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
debugger;
    this.yearValue=event;
  }
}
