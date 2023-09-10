import { Component, ElementRef, ViewChild } from '@angular/core';
import { CartService } from 'src/app/Services/cart.service';
import { DataService } from 'src/app/Services/data.service';
// import{ DropDownListComponent } from '@syncfusion/ej2-dropdowns'

@Component({
  selector: 'app-cartlist',
  templateUrl: './cartlist.component.html',
  styleUrls: ['./cartlist.component.css']
})
export class CartlistComponent {

  // @ViewChild('sample')
  //      public ddlObj: DropDownListComponent;

  constructor(private data : DataService , private cart : CartService){}

  cartList = this.cart.cartList;
  
  cartNumber : number = 1;

  totalPrice : number = 0 ;
  ngOnIt(){
    this.totalPrice = this.cartList.reduce((total,items) => {
      return total + items.Quantity * items.price ;
    } , 0)
  }
 
   

  onPlus(Cart){
    if(this.cartNumber < Cart.items_left ){
      this.cartNumber++ ; 
     this.cartList = this.cartList.map(obj => {
        if (obj.id === Cart.id ) {
         return {...obj, Quantity : this.cartNumber};
        }
        return obj;
       });

    }
    else
       alert("No More Items Left")
    console.log(this.cartList);
    this.totalPrice = this.cartList.reduce((total,items) => {
      return total + items.Quantity * items.price ;
    } , 0)
  }

  onMinus(Cart){
    if(this.cartNumber > 0){
        this.cartNumber--; 
        this.cartList = this.cartList.map(obj => {
          if (obj.id === Cart.id ) {
           return {...obj, Quantity : this.cartNumber};
          }
          return obj;
         });
        
    }
    else
       alert("Should atleast have One item selected")
       console.log(this.cartList);
     this.totalPrice = this.cartList.reduce((total,items) => {
        return total + items.Quantity * items.price ;
      } , 0)
    }

    onRemove(value){
     this.cartList =  this.cartList.filter(item => item != value)
     this.totalPrice = this.cartList.reduce((total,items) => {
      return total + items.Quantity * items.price ;
    } , 0)

    }
  

    
  }
