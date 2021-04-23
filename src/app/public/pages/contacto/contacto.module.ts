import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { ComponentsModule } from '../../components/components.module';
import { ContactoRoutingModule } from './contacto-routing.module';
import { ContactoComponent } from './contacto.component';

@NgModule({
    imports: [
        CommonModule,
        ContactoRoutingModule,
        ComponentsModule,
        ReactiveFormsModule
    ],
    declarations: [
        ContactoComponent
    ],
    exports: []
})
export class ContactoModule {}