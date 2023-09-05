import { Component, Input } from '@angular/core';
import { Products } from '../../Models/Products';
import { DataService } from '../../Services/data.service';

@Component({
  selector: 'product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent {

constructor(private Data : DataService){}
  selectedproduct : Products;
  products = this.Data.products

  totalProduct = this.products.length
  istock = this.products.filter(p  => p.is_in_inventory == true).length
  ostock = this.products.filter(p => p.is_in_inventory == false ).length
  omen = this.products.filter(p => p.gender == "MEN").length
  owomen = this.products.filter(p => p.gender == "WOMEN").length
  okids = this.products.filter(p => p.gender== "KIDS").length
  oname = this.products.map(p => p.name)


  selectedFilter : string = 'all'

  
  onFilter(radio: string){
    this.selectedFilter = radio
  }

  // ngOnInit(){
  //   console.log(this.oname);
  //   }

  @Input()
  searchText : string = ''

  @Input()
  presearchText : string = ''

  
}
