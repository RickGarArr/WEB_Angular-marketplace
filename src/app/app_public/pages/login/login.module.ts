import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { ComponentsModule } from '../../components/components.module';
import { LoginRoutingModule } from './login-routing.module';
import { LoginPage } from './login.page';

@NgModule({
    imports: [
        CommonModule,
        LoginRoutingModule,
        ComponentsModule,
        ReactiveFormsModule
    ],
    declarations: [
        LoginPage,
    ],
    exports: []
})
export class LoginModule {}