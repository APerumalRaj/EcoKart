import { Component, ElementRef, EventEmitter, Input, Output, ViewChild } from '@angular/core';

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

}
