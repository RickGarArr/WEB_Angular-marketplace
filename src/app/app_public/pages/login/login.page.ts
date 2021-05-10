import { HttpErrorResponse } from '@angular/common/http';
import { AfterViewInit, Component, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { NavigationEnd, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { IHttpErrorResponse, IHttpLoginResponse } from 'src/app/interfaces/ISubscribe';
import { JWTService } from 'src/app/services/jwt.service';
import { LoginService } from '../../services/login.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.css']
})
export class LoginPage implements OnInit, AfterViewInit, OnDestroy {

  loginForm: FormGroup;
  loginSubs: Subscription;

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private loginService: LoginService,
    private jwtService: JWTService
  ) {
    this.createLoginForm();
  }

  ngOnInit(): void {
  }
  
  ngAfterViewInit(): void {
    const navHeight = document.getElementById('navbar').offsetHeight;
    document.getElementById('login-app').style.marginTop = `${navHeight}px`;
  }
  
  ngOnDestroy(): void {
    this.loginSubs.unsubscribe();
  }

  // funciones  
  createLoginForm() {
    this.loginForm = this.fb.group({
      email: new FormControl('', [Validators.required, Validators.minLength(8), Validators.email]),
      password: new FormControl('', [Validators.required, Validators.minLength(4)])
    });
  }

  login() {
    this.loginSubs = this.loginService.login(this.loginForm.value).subscribe(({token}: IHttpLoginResponse) => {
      this.jwtService.saveTokenToLocalStorage(token).then(() => {
        if(this.jwtService.userDecoded.tipo === 'admin') {
          this.router.navigate(['/public']);
        }
      });
    }, ({error}: IHttpErrorResponse) => {
      console.log(error);
    });
  }
}
