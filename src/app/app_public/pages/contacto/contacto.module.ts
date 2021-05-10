import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { ComponentsModule } from '../../components/components.module';
import { ContactoRoutingModule } from './contacto-routing.module';
import { ContactoPage } from './contacto.page';

@NgModule({
    imports: [
        CommonModule,
        ContactoRoutingModule,
        ComponentsModule,
        ReactiveFormsModule
    ],
    declarations: [
        ContactoPage
    ],
    exports: []
})
export class ContactoModule {}