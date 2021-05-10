import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminComponent } from './admin.component';
import { CategoriasPage } from './pages/categorias/categorias.page';
import { ComerciosPage } from './pages/comercios/comercios.page';
import { ConsumidoresPage } from './pages/consumidores/consumidores.page';
import { DashboardPage } from './pages/dashboard/dashboard.page';
import { ProductosPage } from './pages/productos/productos.page';
import { SolicitudesPage } from './pages/solicitudes/solicitudes.page';

const routes: Routes = [
    {
        path: 'admin',
        component: AdminComponent,
        children: [
            {
                path: '',
                component: DashboardPage
            },
            {
                path: 'productos',
                component: ProductosPage
            },
            {
                path: 'comercios',
                component: ComerciosPage
            },
            {
                path: 'solicitudes',
                component: SolicitudesPage
            },
            {
                path: 'categorias',
                component: CategoriasPage
            },
            {
                path: 'consumidores',
                component: ConsumidoresPage
            }
        ]
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class PublicRoutingModule {}