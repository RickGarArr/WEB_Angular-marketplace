import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';
import { FormControlComponent } from './form-control/form-control.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    NavbarComponent,
    FooterComponent,
    FormControlComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    ReactiveFormsModule
  ],
  exports: [
    NavbarComponent,
    FooterComponent,
    FormControlComponent
  ]
})
export class ComponentsModule { }
