import { Component, Input } from '@angular/core';
import { User } from '../user';

@Component({
  selector: 'app-directive',
  templateUrl: './directive.component.html',
  styleUrls: ['./directive.component.css']
})
export class DirectiveComponent {

isLogIn: boolean = true;
  isLogOut: boolean = true;

  list = [1, 2, 3, 4, 5];

 

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

}
