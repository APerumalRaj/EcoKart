import { Component } from '@angular/core';
import { CartService } from 'src/app/Services/cart.service';
import { DataService } from 'src/app/Services/data.service';

@Component({
  selector: 'app-cartlist',
  templateUrl: './cartlist.component.html',
  styleUrls: ['./cartlist.component.css']
})
export default class CartlistComponent {


  constructor(private data : DataService , private cart : CartService){}

  cartList = this.cart.cartList

  cartNumber : number = 1;

  onPlus(Cart){
    if(this.cartNumber < Cart ){
      this.cartNumber = this.cartNumber + 1; 
    }
    else
       alert("No More Items Left")
  }

  onMinus(){
    if(this.cartNumber > 0){
        this.cartNumber = this.cartNumber - 1; 
    }
    else
       alert("Should atleast have One item selected")
    }

    onRemove(value){
     this.cartList =  this.cartList.filter(item => item != value)
      console.log(this.cartList);
    }
  
    
  }
