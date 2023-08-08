import { Component, Input, OnInit } from '@angular/core';
import { AnimationTestComponent } from './animation-test/animation-test.component';


@Component({
  selector: 'app-root', 
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'expense-manager';

   //child 
  // @Input() userName: string;
data='aaaa';
  // name: string = 'Peter';

  // sidenav collapse functions
  

  isOpen: boolean = false; 
  buttonText: string = "Open Sidebar";
  
  
  // triggerSidebar() { 
  //    this.isOpen = !this.isOpen;
      
      
  //    if(this.isOpen){
  //    this.buttonText = "Close Sidebar";      
  //    this.openNav();
  //   }  
  //    else
  //    this.buttonText = "Open Sidebar";
  //    this.closeNav();
  // }
  
  // openNav() {        
  //   document.getElementById("mySidebar").style.width = "250px";
  //   document.getElementById("main").style.marginLeft = "250px";
  //      }
  // closeNav() {
  //   document.getElementById("mySidebar").style.width = "0";
  //   document.getElementById("main").style.marginLeft= "0";
  // }
  
  //toggle function
  checked = true;

  sidebarToggler = {
  openNav1: function() {
    document.getElementById("mySidebar").style.marginLeft = "0px";
    document.getElementById("main").style.marginLeft = "300px";
    
    document.getElementById("op").style.display = "none";
    document.getElementById("cl").style.display = "inline";
  
  },
  closeNav1: function() {
    document.getElementById("mySidebar").style.marginLeft = "-200px";
    document.getElementById("main").style.marginLeft = "100px";
    document.getElementById("op").style.display = "inline";
    document.getElementById("cl").style.display = "none";
  }
 }
  
  


   
  
   
  

 //animation test component export
 //exports=AnimationTestComponent;
 
}