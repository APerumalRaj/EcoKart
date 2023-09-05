import { Component } from '@angular/core';
import { FeatureService } from '../Services/feature.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
constructor( private data: FeatureService){}

slides = this.data.feeatureData

}
