import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { ComponentsModule } from '../../components/components.module';
import { SignRoutingModule } from './signup-routing.module';
import { SignUpComponent } from './signup.component';

@NgModule({
    declarations: [
        SignUpComponent
    ],
    imports: [
        CommonModule,
        SignRoutingModule,
        ComponentsModule,
        ReactiveFormsModule
    ],
    exports: []
})
export class SignUpModule {}