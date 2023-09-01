import { Component, ElementRef, EventEmitter, Input, Output, ViewChild } from '@angular/core';
import { FormControl, FormsModule } from '@angular/forms';
import { Products } from '../../Models/Products';
import { ProductListComponent } from '../product-list/product-list.component';
import { Observable, map, startWith } from 'rxjs';
import { DataService } from '../../Services/data.service';


@Component({
  selector: 'search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent {

  @ViewChild('searchInput') searchInputEl : ElementRef

  searchText: string = '';
  preSearchText
  
  @Output()
   searchTextChange = new EventEmitter<string>()
  
   @Output()
   presearchTextChange = new EventEmitter<string>()


  onLoad(){
    this.preSearchText = this.searchInputEl.nativeElement.value
    this.presearchTextChange.emit(this.preSearchText)
  }
 
  updateSearchText(){
      this.searchText = this.searchInputEl.nativeElement.value
      this.searchTextChange.emit(this.searchText)
  }

constructor(private data : DataService){}

  myControl = new FormControl('');
  options: string[] = this.data.products.map( p => p.name);
  filteredOptions: Observable<string[]>;

  ngOnInit() {
    this.filteredOptions = this.myControl.valueChanges.pipe(
      startWith(''),
      map(value => this._filter(value || '')),
    );
  }

  private _filter(value: string): string[] {
    const filterValue = value.toLowerCase();

    return this.options.filter(option => option.toLowerCase().includes(filterValue));
  }
}
