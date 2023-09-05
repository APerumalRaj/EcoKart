import { DataSource } from '@angular/cdk/collections';
import { Directive, ElementRef, HostListener, Renderer2 } from '@angular/core';
import { DataService } from '../Services/data.service';
import { FeatureService } from '../Services/feature.service';

@Directive({
  selector: '[appFeature]'
})
export class FeatureDirective {
  constructor( private el : ElementRef , private render : Renderer2) {}

@HostListener('mousenter') onHover(){
const btn = this.render.createElement('button');
const txt =  this.render.createText('Show More');
 this.render.appendChild(btn , txt);
 this.render.appendChild(this.el.nativeElement,btn)
}
  
}



