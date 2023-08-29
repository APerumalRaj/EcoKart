import { Component, ElementRef, EventEmitter, Input, Output } from '@angular/core';
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

// @Output()
//   Destroy = false

// DestructionStatus = new EventEmitter<boolean>()
// onClose(){
//   this.Destroy = !this.Destroy
//   this.DestructionStatus.emit(this.Destroy)
// }

  ngOnInit(){
    this.product = this.productListco.selectedproduct;
  }

}
