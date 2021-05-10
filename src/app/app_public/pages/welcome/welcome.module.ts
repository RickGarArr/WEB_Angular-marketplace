import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ComponentsModule } from '../../components/components.module';
import { WelcomeRoutingModule } from './welcome-routing.module';
import { WelcomePage } from './welcome.page';

@NgModule({
    declarations: [
        WelcomePage
    ],
    imports: [
        CommonModule,
        WelcomeRoutingModule,
        ComponentsModule
    ],
    exports: []
})
export class WelcomeModule {}