import { Component } from '@angular/core';

@Component({
  selector: 'app-event-binding',
  templateUrl: './event-binding.component.html',
  styleUrls: ['./event-binding.component.css']
})
export class EventBindingComponent {
  butEv: string = "";
  showData($event: any) {
    this.butEv = "button is clicked!";
    console.log("button is clicked!");
    if ($event) {
      console.log($event.target);
      console.log($event.target.value);
    }
  }

  
  
  // property binding
  userName: string = "Peter";
  pavan;

  // class binding
  myCSSClass = "red"; 
  applyCSSClass = false; 

  //style binding
  myColor = 'brown';
  
}
