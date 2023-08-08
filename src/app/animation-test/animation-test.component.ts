import { Component } from '@angular/core';
import { state, style, transition, animate, trigger } from '@angular/animations';


@Component({
  selector: 'app-animation-test',
  templateUrl: './animation-test.component.html',
  styleUrls: ['./animation-test.component.css'],
  animations: [
    trigger('enlarge', [
       state('start', style({
         height: '5px',
      opacity: 0.5,
      backgroundColor: 'black'                  
       })),
       state('end', style({
         height: '300px',
         opacity: 1,
         backgroundColor: 'grey'
      })),
       transition('start => end', [
          animate('500ms 100ms ease')
       ]),
       transition('end => start', [
          animate('500ms 100ms ease')
       ])
    ])
 ]
})
export class AnimationTestComponent {
  title = 'Animation Application'; 
  isEnlarge: boolean = false; 
  buttonText: string = "Enlarge"; 
  triggerAnimation() { 
     this.isEnlarge = !this.isEnlarge; 
     if(this.isEnlarge) 
        this.buttonText = "Shrink"; 
     else 
        this.buttonText = "Enlarge"; 
  }
}
