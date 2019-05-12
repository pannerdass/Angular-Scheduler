import { Component, OnInit } from '@angular/core';
import { CalenderService } from '../services/calender.service';

@Component({
  selector: 'app-calender',
  templateUrl: './calender.component.html',
  styleUrls: ['./calender.component.css']
})
export class CalenderComponent implements OnInit {
  Collection: any[] = [];
  constructor(private calenderService: CalenderService) { }

  ngOnInit() {
   debugger;
    this.Collection = [];
    let Current = this.calenderService.getCurrentDateMonthYear();
    this.Collection = this.calenderService.getCalender(Current.Year, Current.Month);

  }

}
