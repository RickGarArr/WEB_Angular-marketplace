import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { AcercaRoutingModule } from './acerca-routing.module';
import { AcercaComponent } from './acerca.component';

@NgModule({
    imports: [
        CommonModule,
        AcercaRoutingModule
    ],
    declarations: [
        AcercaComponent
    ],
    exports: []
})
export class AcercaModule {}