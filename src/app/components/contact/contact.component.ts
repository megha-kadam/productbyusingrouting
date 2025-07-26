import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {
  @ViewChild('contactForm') contactForm !: NgForm;

  constructor() { }

  onContact(){
    if(this.contactForm.valid){
      let obj = this.contactForm.value;
      console.log(obj);
      this.contactForm.reset()
      
    }
  }

  ngOnInit(): void {
  }

}
