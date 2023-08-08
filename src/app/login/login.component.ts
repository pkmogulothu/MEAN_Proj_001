import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { OnInit}  from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  
    //Create FormGroup
    requiredForm: FormGroup;
    constructor(private fb: FormBuilder) {
       this.myForm();
    }
 
    //Create required field validator for name
    myForm() {
       this.requiredForm = this.fb.group({
        name: ['', [Validators.required, 
          Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$")] ]
      //  passWord: ['', Validators.required ]
       });
    }
  // userName; 
  // passWord;
  // formdata;
  ngOnInit() { 
    //  this.formdata = new FormGroup({ 
    //     userName: new FormControl(""),
    //     passWord: new FormControl("")
    //}); 
  } 
//   onClickSubmit(data) {this.userName = data.userName; this.passWord = data.passWord;}
 }
