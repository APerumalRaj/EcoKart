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
 console.log(this.searchText)
}
 
@ViewChild(ProductListComponent) ProductListComponent : ProductListComponent


}
