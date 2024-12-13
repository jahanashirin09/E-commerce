import { Component } from '@angular/core';
import { ListItemComponent } from '../list-item/list-item.component';
import { HeaderComponent } from '../header/header.component';
import { FilterComponent } from '../filter/filter.component';

@Component({
  selector: 'app-list',
  imports: [ListItemComponent,HeaderComponent,FilterComponent],
  templateUrl: './list.component.html',
  styleUrl: './list.component.css'
})
export class ListComponent {

}
