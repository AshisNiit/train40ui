import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(
    private router: Router
  ){}

  ngOnInit() {
  }

  loginForm = new FormGroup({
    email: new FormControl('Default User Name'),
    password: new FormControl('Default Password')
  })

  login() {
    alert("SUCCESS");
    console.log(this.loginForm.value);
    this.router.navigateByUrl('/home');
    
  }
}
