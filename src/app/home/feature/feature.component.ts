import { Component } from '@angular/core';
import { FeatureService } from 'src/app/Services/feature.service';

@Component({
  selector: 'app-feature',
  templateUrl: './feature.component.html',
  styleUrls: ['./feature.component.css']
})
export class FeatureComponent {

  constructor(private featuredata : FeatureService){}

  data = this.featuredata.feeatureData

}
