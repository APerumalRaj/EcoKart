import { Directive, ElementRef, HostListener, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appHighlight]'
})
export class HighlightDirective {

  constructor(private element : ElementRef, private render : Renderer2) { 
  
  }

  @HostListener('mouseover')  onMouseOver(){
    this.render.addClass(this.element.nativeElement,'highlight')
  }

  @HostListener('mouseleave')  onMouseLeave(){
    this.render.removeClass(this.element.nativeElement,'highlight')
  }

}
