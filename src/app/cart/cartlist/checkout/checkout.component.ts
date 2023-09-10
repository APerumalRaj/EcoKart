import { Component, Input } from '@angular/core';
import { CartService } from 'src/app/Services/cart.service';
import { DataService } from 'src/app/Services/data.service';


@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css']
})
export class CheckoutComponent {

  constructor(private data : DataService , private cart : CartService){}

  @Input()
 TotalPrice : number = 0;

  totalItems : number = this.cart.cartList.length;

  discountTotal : number = this.cart.cartList.reduce( ( total,items) => {
    return total + Math.floor(items.discountPrice == undefined ? 0 : items.discountPrice  / 13) ;
  }, 0);

   price : number = Math.floor((this.TotalPrice + this.totalItems * 34) * this.discountTotal / 100)


  
 
}
