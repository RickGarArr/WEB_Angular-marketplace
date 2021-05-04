import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ComercioRoutingModule } from './comercio-routing.module';
import { ComercioComponent } from './comercio.component';
//Paginas
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { ProductosComponent } from './pages/productos/productos.component';
import { PedidosComponent } from './pages/pedidos/pedidos.component';
import { VentasComponent } from './pages/ventas/ventas.component';
import { ComercioComponentsModule } from './components/components.module';

@NgModule({
    imports: [
        CommonModule,
        ComercioRoutingModule,
        ComercioComponentsModule
    ],
    declarations: [
        ComercioComponent,
        DashboardComponent,
        ProductosComponent,
        PedidosComponent,
        VentasComponent,
    ],
    exports: []
})
export class ComercioModule {}