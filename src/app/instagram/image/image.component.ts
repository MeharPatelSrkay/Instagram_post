import { Component } from '@angular/core';
import insta_data from '../../../assets/data/instagram_json.json'
import { FormsModule } from '@angular/forms'

@Component({
  selector: 'app-image',
  templateUrl: './image.component.html',
  styleUrl: './image.component.css',
})
export class ImageComponent {
  insta_data = insta_data;
  toggleOn = false;
  count = 0

  searchtext = ""

  getsearchtext(event: any){
    this.searchtext = event.target.value
  } 
  
}
