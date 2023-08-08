import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pipes',
  templateUrl: './pipes.component.html',
  styleUrls: ['./pipes.component.css']
})
export class PipesComponent implements OnInit  {
 
  presentDate = new Date(); 

  price : number = 20000;
  Fruits = ["Apple","Orange","Grapes","Mango","Kiwi","Pomegranate"]; 

  decimalNum1: number = 8.7589623; 
  decimalNum2: number = 5.43; 

  decimalNum3: number = 1.8178; 

  jsonData = [
    {
      "userId": 1,
      "userName": 'User1'
    },
    {
      "userId": 2,
      "userName": 'User2'
    },
  ];

  digits : number = 100; 
  
   ngOnInit() {
        
}
}