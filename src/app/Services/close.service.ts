import { Injectable, Input } from '@angular/core';
import { ProductDetailComponent } from '../product-detail/product-detail.component';

@Injectable({
  providedIn: 'root'
})
export class CloseService {

  constructor() { }

  value : string
  displayHide(value : boolean){
    this.value = "none";
    console.log(this.value);
  }

  
}
