import { Component } from '@angular/core';
import { SearchComponent } from '../search/search.component';
import { ActivatedRoute } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-header',
  imports: [SearchComponent, CommonModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css',
})
export class HeaderComponent {
  isHomepage: boolean = false;

  constructor(route: ActivatedRoute) {
    const url: string = route.snapshot.url.join('');
    if (url == 'home'||url == '') {
      this.isHomepage = true;
    } else {
      this.isHomepage = false;
    }
  }
}
