import { Component, ElementRef, EventEmitter, Input, Output } from '@angular/core';
import { ProductListComponent } from '../container/product-list/product-list.component';
import { Products } from '../Models/Products';
import { CartService } from '../Services/cart.service';

@Component({
  selector: 'product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent {
  constructor(private cartService : CartService){}
 
  
  @Input() 
  productListco : ProductListComponent = undefined

  product : Products ;


  ngOnInit(){
    this.product = this.productListco.selectedproduct;
  }

  
  Onclick(value : any){
    this.cartService.addToCart(value)
    
  }

  OnNotify(value : string){
    alert("It has been Notified! If "+ value +"is available we will notify you.")
  }
}
