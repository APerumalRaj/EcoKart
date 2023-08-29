import { Component, Input } from '@angular/core';
import { Products } from 'src/app/Models/Products';
import * as product from 'src/assets/json/data.js'

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent {
@Input()
  product : Products
  

}
