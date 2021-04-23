import { AfterViewInit, Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { NavigationEnd, Router } from '@angular/router';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit, AfterViewInit{

  loginForm: FormGroup;

  constructor( private fb: FormBuilder, private router: Router) {
    this.createLoginForm();
  }

  ngAfterViewInit(): void {
    const navHeight = document.getElementById('navbar').offsetHeight;
    document.getElementById('login-app').style.marginTop = `${navHeight}px`;
  }

  ngOnInit(): void {
  }
  
  createLoginForm() {
    this.loginForm = this.fb.group({
      email: new FormControl('', [Validators.required, Validators.minLength(8), Validators.email]),
      password: new FormControl('', [Validators.required, Validators.minLength(6)])
    });
  }

  setEmail(value) {
    this.loginForm.get('email').setValue(value);
    console.log(this.loginForm.controls['email'].valid);
  }
  
  setPassword(value) {
    this.loginForm.get('password').setValue(value);
  }

  login() {
    console.log(this.loginForm.value);
  }
}
