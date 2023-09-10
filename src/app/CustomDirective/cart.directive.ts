import { Directive, ElementRef, HostListener, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appCart]'
})
export class CartDirective {

  constructor(private element : ElementRef, private render : Renderer2) { 
  
  }


  @HostListener('click')    onClick() {
    this.render.setStyle(this.element.nativeElement , 'color' , 'red');
    this.render.setAttribute(this.element.nativeElement.span,'dispaly','none')
  //   const li = this.render.createElement('span');
  //   const text = this.render.createText('Go To Cart');
  //   this.render.appendChild(li, text);
  //   this.render.appendChild(this.element.nativeElement, li);
  // }
  }
}
