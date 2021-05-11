import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { PublicRoutingModule } from './admin-routing.module';
import { AdminComponent } from './admin.component';
import { AdminComponentsModule } from './components/admin_components.module';
import { DashboardPage } from './pages/dashboard/dashboard.page';

@NgModule({
    declarations: [
        AdminComponent,
        DashboardPage
    ],
    imports: [
        CommonModule,
        PublicRoutingModule,
        AdminComponentsModule,
        AdminComponentsModule
    ],
    exports: []
})
export class AdminModule {}