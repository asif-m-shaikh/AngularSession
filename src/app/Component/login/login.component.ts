import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { CookieService } from 'ngx-cookie-service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor(private cookie: CookieService) { }
  username = "User Name";
  date = new Date()
  gender = 1;
  profileForm = new FormGroup({
    username: new FormControl('', [Validators.required, Validators.maxLength(2)]),
    password: new FormControl('')
  })
  ngOnInit() {
  }
  data = { name: 'asif', role: 'user' }
  submit() {
    if (this.profileForm.valid) {
      console.log("Values ", this.profileForm.value);
      localStorage.setItem('userDATA', JSON.stringify(this.data))
      var date=new Date()
    } else {
      alert('Enter required fields')
      this.profileForm.controls.username.markAsTouched();
    }
  }
  getdata() {
    var userData = JSON.parse(localStorage.getItem('userDATA'));
    var role = userData.role;
  }
}
