import { Component,Input } from '@angular/core';
import { DataService } from '../Services/data.service';
import { Products } from '../Models/Products';
import { ProductListComponent } from '../container/product-list/product-list.component';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent {
 

  @Input() 
  productListco : ProductListComponent = undefined

  product : Products ;


  ngOnInit(){
    this.product = this.productListco.selectedproduct;
  }
}
