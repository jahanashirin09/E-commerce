import { Component } from '@angular/core';
import { ListItemComponent } from '../list-item/list-item.component';
import { HeaderComponent } from '../header/header.component';

@Component({
  selector: 'app-list',
  imports: [ListItemComponent,HeaderComponent],
  templateUrl: './list.component.html',
  styleUrl: './list.component.css'
})
export class ListComponent {

}
