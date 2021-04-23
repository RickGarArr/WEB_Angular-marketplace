import { AfterViewInit, Component, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignUpComponent implements AfterViewInit{

  registerForm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.createForm();
  }

  ngAfterViewInit(): void {
    const navHeight = document.getElementById('navbar').offsetHeight;
    document.getElementById('signup-app').style.marginTop = `${navHeight}px`;
  }

  register() {
    console.log(this.registerForm.value); 
  }

  createForm() {
    this.registerForm = this.fb.group({
      nombre: new FormControl('', [Validators.required]),
      email: new FormControl('', [Validators.required]),
      telefono: new FormControl('', [Validators.required])
    });
  }
}
