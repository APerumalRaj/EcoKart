import { Directive, ElementRef, HostListener, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appDetailclose]'
})
export class DetailcloseDirective {

  constructor(private element : ElementRef, private render : Renderer2) { }
  Destroy = false
  
  @HostListener('click') onClick(){
     this.Destroy = !this.Destroy
  }

}
