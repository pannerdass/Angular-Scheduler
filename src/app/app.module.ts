import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { DatePickerComponent } from './date-picker/date-picker.component';
import { CalenderComponent } from './calender/calender.component';
import { TdHighlightDirective } from './td-highlight.directive';
import { TextUnderlineDirective } from './text-underline.directive';

@NgModule({
  declarations: [
    AppComponent,
    DatePickerComponent,
    CalenderComponent,
    TdHighlightDirective,
    TextUnderlineDirective
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
