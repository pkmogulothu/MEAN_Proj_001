import { Component, Input } from '@angular/core';
import { ContentComponent } from '../content/content.component';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  test = 'home';

  features: boolean;

  constructor() {
    this.features = true;
    this.features = false;
    console.log(this.features);
  }

  featData($event: any) {
    var features: boolean;
    // features = false;
    this.features = true;
    var f = new ContentComponent;
    f.features = true;
    console.log("features is clicked!");
    console.log(features);
   // return (features);
    

  }

  //@Input() userName: string;

  //name: string = 'Peter';

  //
 // @Input() hero;
  //kishore = this.features;
 
}
