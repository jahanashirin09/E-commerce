import { Component } from '@angular/core';

@Component({
  selector: 'app-search',
  imports: [],
  templateUrl: './search.component.html',
  styleUrl: './search.component.css',
})
export class SearchComponent {
  search_value = '';

  onSearchClick(val: string) {
    // this.search_value = val
    console.log(val);
  }
}
