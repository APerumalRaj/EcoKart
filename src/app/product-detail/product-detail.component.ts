import { Component, ElementRef, Input } from '@angular/core';
import { ProductListComponent } from '../container/product-list/product-list.component';
import { Products } from '../Models/Products';

@Component({
  selector: 'product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent {
  
  @Input() 
  productListco : ProductListComponent = undefined

  product : Products ;

  ngOnInit(){
    this.product = this.productListco.selectedproduct;
  }
}
