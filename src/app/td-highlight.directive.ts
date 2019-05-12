import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appTdHighlight]'
})
export class TdHighlightDirective {

  constructor(private el: ElementRef) { }
 
  @HostListener('mouseenter') onMouseEnter() {
    this.highlight('#d0d0d0');
  }
 
  @HostListener('mouseleave') onMouseLeave() {
    this.highlight(null);
  }
 
  private highlight(color: string) {
    this.el.nativeElement.style.backgroundColor = color;
  }

}
