import { Component } from '@angular/core';
import insta_data from '../../../assets/data/instagram_json.json'
import { FilterpipePipe } from '../../filterpipe.pipe';

@Component({
  selector: 'app-search-user',
  templateUrl: './search-user.component.html',
  styleUrl: './search-user.component.css',
})

export class SearchUserComponent {
  insta_data = insta_data;
  
  

}
