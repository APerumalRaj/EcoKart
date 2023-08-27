import { Directive, ElementRef, HostBinding, HostListener, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appFavIcon]'
})
export class FavIconDirective {

  constructor(private element : ElementRef, private render : Renderer2) { 
  
  }


  @HostListener('click') newColor() {
    this.render.setStyle(this.element.nativeElement,'color','red')
  }
}
