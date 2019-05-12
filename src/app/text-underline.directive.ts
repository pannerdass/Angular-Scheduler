import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appTextUnderline]'
})
export class TextUnderlineDirective {

  constructor(private el: ElementRef) { }
 
  @HostListener('mouseenter') onMouseEnter() {
    this.underLine('underline');
  }
 
  @HostListener('mouseleave') onMouseLeave() {
    this.underLine(null);
  }
 
  private underLine(line: string) {
    this.el.nativeElement.style.textDecoration = line;
  }

}
