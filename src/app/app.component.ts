import { Component } from '@angular/core';
import data from '../assets/data/instagram_json.json'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  
  title = 'new-app';
  data = data;
}
