import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { PublicRoutingModule } from './admin-routing.module';
import { AdminComponent } from './admin.component';

@NgModule({
    declarations: [
        AdminComponent
    ],
    imports: [
        CommonModule,
        PublicRoutingModule
    ],
    exports: []
})
export class AdminModule {}