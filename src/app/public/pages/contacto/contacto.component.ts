import { AfterViewInit, Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-contacto',
  templateUrl: './contacto.component.html',
  styleUrls: ['./contacto.component.css']
})
export class ContactoComponent implements OnInit, AfterViewInit{

  contactoForm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.createForm();
  }

  ngAfterViewInit(): void {
    const navHeight = document.getElementById('navbar').offsetHeight;
    document.getElementById('contacto-app').style.marginTop = `${navHeight}px`;
  }

  ngOnInit(): void {
  }

  createForm() {
    this.contactoForm = this.fb.group({
      nombre: new FormControl('', [Validators.required, Validators.minLength(6)]),
      email: new FormControl('', [Validators.required, Validators.minLength(10), Validators.pattern('^[a-z0-9]+(\.[_a-z0-9]+)*@[a-z0-9-]+(\.[a-z0-9-]+)*(\.[a-z]{2,15})$')]),
      mensaje: new FormControl('', [Validators.required, Validators.minLength(20)])
    });
  }

}
