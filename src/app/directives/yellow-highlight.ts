import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appYellowHighlight]',
})
export class YellowHighlight {
  constructor(private el: ElementRef<HTMLElement>) {}

  @HostListener('mouseenter')
  onMouseEnter(): void {
    this.el.nativeElement.style.backgroundColor = 'yellow';
  }

  @HostListener('mouseleave')
  onMouseLeave(): void {
    this.el.nativeElement.style.backgroundColor = '';
  }
}
