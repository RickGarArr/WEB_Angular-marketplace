import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ComponentsModule } from './components/components.module';
import { PublicRoutingModule } from './public-routing.module';
import { PublicComponent } from './public.component';

@NgModule({
    declarations: [
        PublicComponent,
    ],
    imports: [
        CommonModule,
        ComponentsModule,
        PublicRoutingModule
    ],
    exports: []
})
export class PublicModule {}