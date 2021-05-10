import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { AcercaRoutingModule } from './acerca-routing.module';
import { AcercaPage } from './acerca.page';

@NgModule({
    imports: [
        CommonModule,
        AcercaRoutingModule
    ],
    declarations: [
        AcercaPage
    ],
    exports: []
})
export class AcercaModule {}