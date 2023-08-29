import { Component, ElementRef, ViewChild } from '@angular/core';
import { ProductListComponent } from './product-list/product-list.component';

@Component({
  selector: 'container',
  templateUrl: './container.component.html',
  styleUrls: ['./container.component.css']
})
export class ContainerComponent {

searchText : string = "";

setsearchText(value : string){
 this.searchText = value
}

presearchText : string = ''

onLoading(text){
this.presearchText = text
console.log(this.presearchText)
}
 
@ViewChild(ProductListComponent) ProductListComponent : ProductListComponent;


// Name


 
// ngOnInIt(){
// }
// Destroy : string =''

// onChange(des : string){
// this.Destroy = des
// console.log(this.Destroy);

// }


}
