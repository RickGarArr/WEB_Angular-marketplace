import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ComercioComponent } from './comercio.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { PedidosComponent } from './pages/pedidos/pedidos.component';
import { ProductosComponent } from './pages/productos/productos.component';
import { VentasComponent } from './pages/ventas/ventas.component';

const routes: Routes = [
    {
        path: 'comercio',
        component: ComercioComponent,
        children: [
            {
                path: 'home',
                component: DashboardComponent
            },{
                path: 'pedidos',
                component: PedidosComponent
            },{
                path: 'productos',
                component: ProductosComponent
            },{
                path: 'ventas',
                component: VentasComponent
            }
        ]
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class ComercioRoutingModule {}