import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  emptyField: boolean = false;
  email: string = '';
  message: string = '';
  displayModal: string = 'none'; 

  constructor() { }

  ngOnInit(): void {
  }

  send(): void {
    if(!this.email || !this.message){
      console.log(this.email);
      console.log(this.message);
      this.emptyField = true;
    }
    else{
      this.emptyField = false;
      this.displayModal = 'block';
    }
  }

  closeModal(): void {
    this.displayModal = 'none';
  }

}
