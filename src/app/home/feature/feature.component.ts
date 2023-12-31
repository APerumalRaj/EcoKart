import { Component, Input } from '@angular/core';
import { trigger, transition,style,animate } from '@angular/animations'
@Component({
  selector: 'app-feature',
  templateUrl: './feature.component.html',
  styleUrls: ['./feature.component.css'],
  animations: [trigger('Animation', 
  [transition('void => *', 
  [style({ opacity: 0 }), 
    animate('100ms', style({ opacity: 0.35 })), 
    animate('200ms', style({ opacity: 0.7 })), 
    animate('300ms', style({ opacity: 1 }))]),
    transition('* => void', [animate('300ms', style({ opacity: 0 }))]
    )]
    )]
})
export class FeatureComponent {


 
  
  @Input() slides ;

  currentSlide = 0;

  constructor() {}

  onPreviousClick() {
    const previous = this.currentSlide - 1;
    this.currentSlide = previous < 0 ? this.slides.length - 1 : previous;
    // console.log("previous clicked, new current slide is: ", this.currentSlide);
  }

  onNextClick() {
    const next = this.currentSlide + 1;
    this.currentSlide = next === this.slides.length ? 0 : next;
    // console.log("next clicked, new current slide is: ", this.currentSlide);
  }
onClick(){}

}


