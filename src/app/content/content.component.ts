import { Component, Input } from '@angular/core';
import { HeaderComponent } from '../header/header.component';
import { User } from '../user';
import { CustomstyleDirective } from '../customstyle.directive';

@Component({
  selector: 'app-content',
   templateUrl: './content.component.html',
  // template:  `<div> 
  // <ng-template ngFor let-item [ngForOf]="Fruits" let-i="index"> 
  // <p>{{i}}. {{item}}</p> 
  // </ng-template> 
  // </div>`,
  styleUrls: ['./content.component.css']
})
export class ContentComponent {
  butEv: string = "";
  showData($event: any) {
    this.butEv = "button is clicked!";
    console.log("button is clicked!");
    if ($event) {
      console.log($event.target);
      console.log($event.target.value);
    }
  }

  userName: string = "Peter";

  

  myCSSClass = "red";
  applyCSSClass = true;

  myColor = "brown";
  isNeeded = true;

  feature2 = new HeaderComponent;

  features = this.feature2.features;


  isLogIn: boolean = true;
  isLogOut: boolean = true;

  list = [1, 2, 3, 4, 5];

  // constructor() { }

  // ngOnInit(): void {
  // }

  //trackbydata 
  studentArr: any[] = [{
    "id": 1,
    "name": "student1"
  },
  {
    "id": 2,
    "name": "student2"
  },
  {
    "id": 3, "name": "student3"
  },
  {
    "id": 4,
    "name": "student4"
  }
  ];
  trackByData(index: number, studentArr: any): number {
    return studentArr.id;
  }

  //switch case
  logInName = 'admin';

  //ngClass
  users: User[] =
    [
      {
        "userId": 1,
        "userName": 'User1'
      },
      {
        "userId": 2,
        "userName": 'User2'
      },
    ];


    // ngForOf
    Fruits = ["mango","apple","orange","grapes"]; 
   ngOnInit() 
   { 
   } 

  //  child component
  // @Input() userName: string;
  @Input() pavan;

//pipes

presentDate = new Date(); 


}
