import {eDate} from '../enum/date.enum';
import { Injectable } from '@angular/core';
import { ICalender } from '../interface/icalender';

@Injectable({
  providedIn: 'root'
})
export class CalenderService {
 
  private calender:ICalender;
  private calenderItem:ICalender[]=[];
 private fullCalender: any[]=[];
  constructor() { }


   public getCalender(year:number,month:number):any{
    debugger;    
    this.fullCalender=[];
    this.calenderItem=[];
    let givenMonth=new Date(year,month);
    let getGivenMonthStartday=givenMonth.getDay();
    let getGivenMonthEndDate=new Date(givenMonth.getFullYear(),givenMonth.getMonth()+1,0).getDate();
    let getPreviousMonthEndDate=new Date(givenMonth.getFullYear(),givenMonth.getMonth(),0).getDate();
    

    let balanceWeekDays=getGivenMonthStartday-1;
    let count=balanceWeekDays;
    for(var i=0;i<=count;i++){
    
   //   this.calender=null;
       this.calender={title:(getPreviousMonthEndDate-balanceWeekDays).toString()}   
       balanceWeekDays--;
       this.calenderItem.push(this.calender);
    
    }


    for(var i=1;i<=getGivenMonthEndDate;i++){

     
      this.calender={title: i.toString()}  ;
      this.calenderItem.push(this.calender);
      if(this.calenderItem.length % 7==0){
   
       this.fullCalender.push(this.calenderItem);
      this.calenderItem=[];
   
   
      }
    }
   
      if(this.calenderItem.length>0){

        let balanceCount=8-this.calenderItem.length
        
        for(var i=1;i<balanceCount;i++){
         //this.calender=null;
           this.calender={title:i.toString()} ;
           this.calenderItem.push(this.calender);
            
        }
        
         this.fullCalender.push(this.calenderItem);
        }

        return this.fullCalender;

  }

  
}
