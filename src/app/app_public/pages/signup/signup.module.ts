import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { SignRoutingModule } from './signup-routing.module';
import { SignUpPage } from './signup.page';
import { ComponentsModule } from '../../components/components.module';

@NgModule({
    declarations: [
        SignUpPage
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