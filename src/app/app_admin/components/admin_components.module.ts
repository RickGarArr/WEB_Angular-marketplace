import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AdminNavbarComponent } from './aside-nav/aside-nav.component';
import { AdminToolbarComponent } from './toolbar/toolbar.component';
import { AdminGeneralCardComponent } from './general-card/general-card.component';

@NgModule({
    imports: [
        CommonModule,
        RouterModule
    ],
    declarations: [
        AdminNavbarComponent,
        AdminToolbarComponent,
        AdminGeneralCardComponent
    ],
    exports: [
        AdminNavbarComponent,
        AdminToolbarComponent,
        AdminGeneralCardComponent
    ]
})
export class AdminComponentsModule {}