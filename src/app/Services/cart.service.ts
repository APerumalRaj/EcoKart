import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  constructor() { }

  cartList : Number[]
  addToCart(value : Number){
  this.cartList.push(value)
  
  }

}
