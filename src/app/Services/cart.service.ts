import { Injectable } from '@angular/core';
import { Products } from '../Models/Products';

@Injectable({
  providedIn: 'root'
})
export class CartService {


  constructor() { }

  cartList : Products[] = []
  addToCart(value){
    if(!this.cartList.includes(value)){
          this.cartList.push(value)
          this.cartList = this.cartList.map(obj => {
                 return {...obj, Quantity : 1};
               });
          
    }
  console.log(this.cartList);
  
   }

}
