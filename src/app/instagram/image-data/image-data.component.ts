import { Component, Input } from '@angular/core';
import insta_data from '../../../assets/data/instagram_json.json'

@Component({
  selector: 'app-image-data',
  templateUrl: './image-data.component.html',
  styleUrl: './image-data.component.css'
})
export class ImageDataComponent {
  insta_data = insta_data
  CommenttoggleOn = false
  LiketoggleOn = false

  commenttoggle(){
    this.CommenttoggleOn = !this.CommenttoggleOn;
    this.LiketoggleOn = false
  }

  liketoggle(){
    this.LiketoggleOn = !this.LiketoggleOn
    this.CommenttoggleOn = false
  }

  @Input() id : any;

  sentence = "";
  regex = /@(\w+)\s/g;
 
  extractUsernames(commentText: string): string[] {
    const matches = commentText.match(this.regex);
    if (matches) {
      const usernames = matches.map(match => match.substring(1));
      return usernames;
    } else {
      return [];
    }
  }

  extractComment(commentText: string): string {
    const newcomment = commentText.replace(this.regex, '')
    return newcomment;
  }
}
