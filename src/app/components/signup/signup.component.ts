import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {
  @ViewChild('signUpForm') signUpForm !: NgForm;

  constructor() { }

  onAddUser(){
    if(this.signUpForm.valid){
     let userObj = this.signUpForm.value;
      console.log(userObj);
      this.signUpForm.reset();
    }
  }

  ngOnInit(): void {
  }

}
