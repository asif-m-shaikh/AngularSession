import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor() { }
  username = "User Name";
  date = new Date()
  gender=1;
  profileForm = new FormGroup({
    username: new FormControl('', [Validators.required, Validators.maxLength(2)]),
    password: new FormControl('')
  })
  ngOnInit() {
  }

  submit() {
    if (this.profileForm.valid) {
      console.log("Values ", this.profileForm.value);
    } else {
      alert('Enter required fields')
      this.profileForm.controls.username.markAsTouched();
    }
  }
}
