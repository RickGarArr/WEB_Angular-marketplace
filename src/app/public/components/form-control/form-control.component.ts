import { AfterViewInit, Component, ElementRef, Input, OnInit, Output, ViewChild } from '@angular/core';
import { EventEmitter } from '@angular/core';
import { FormControl, FormControlName, FormGroup, NgControl} from '@angular/forms';

@Component({
  selector: 'app-form-control',
  templateUrl: './form-control.component.html',
  styleUrls: ['./form-control.component.css']
})
export class FormControlComponent implements OnInit,AfterViewInit{

  @ViewChild('input') input: ElementRef;
  @ViewChild('campo') campo: ElementRef;
  @ViewChild('span') span: ElementRef;

  backgroundInput: HTMLElement;

  @Input() labelName: string = 'S/N';
  @Input() inputType: string = 'text';
  @Input() inputName: string = 'sin_name';
  @Input() inputId: string = 'sin_id';
  @Input() placeholder: string = '';
  @Input() control: FormControl;

  constructor() { }

  ngOnInit(): void {
  }

  ngAfterViewInit(): void {
    (this.input.nativeElement as HTMLInputElement).addEventListener('focus', (e) => {
      this.campo.nativeElement.classList.add('focus');
      this.backgroundInput = (e.target as HTMLInputElement).parentElement.getElementsByClassName('background-input')[0] as HTMLElement;
      this.backgroundInput.classList.add('focus');
    });

    (this.input.nativeElement as HTMLInputElement).addEventListener('blur', () => {
      this.campo.nativeElement.classList.remove('focus');
      this.backgroundInput.classList.remove('focus');
      if (this.control.valid) {
        this.span.nativeElement.classList.add('valid');
        this.span.nativeElement.classList.remove('invalid');
      } else {
        this.span.nativeElement.classList.add('invalid');
        this.span.nativeElement.classList.remove('valid');
      }
    });
  }
  
}
