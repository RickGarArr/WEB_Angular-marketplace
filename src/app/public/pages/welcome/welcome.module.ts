import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ComponentsModule } from '../../components/components.module';
import { WelcomeRoutingModule } from './welcome-routing.module';
import { WelcomeComponent } from './welcome.component';

@NgModule({
    declarations: [
        WelcomeComponent
    ],
    imports: [
        CommonModule,
        WelcomeRoutingModule,
        ComponentsModule
    ],
    exports: []
})
export class WelcomeModule {}