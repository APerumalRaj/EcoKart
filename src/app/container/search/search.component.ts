import { Component, ElementRef, EventEmitter, Output, ViewChild } from '@angular/core';

@Component({
  selector: 'search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent {

  @ViewChild('searchInput') searchInputEl : ElementRef

  searchText: string = '';
  
  @Output()
  searchTextChange = new EventEmitter<string>()
 
  updateSearchText(){
      this.searchText = this.searchInputEl.nativeElement.value
      this.searchTextChange.emit(this.searchText)
  }
}