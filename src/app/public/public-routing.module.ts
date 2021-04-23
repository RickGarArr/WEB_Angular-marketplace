import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PublicComponent } from './public.component';

const routes: Routes = [
    {
        path: 'public',
        component: PublicComponent,
        children: [
            { 
                path: '', loadChildren: () => import('./pages/welcome/welcome.module').then( m => m.WelcomeModule) 
            },
            {
                path: 'signup', loadChildren: () => import('./pages/signup/signup.module').then( m => m.SignUpModule)
            },
            {
                path: 'login', loadChildren: () => import('./pages/login/login.module').then( m => m.LoginModule)
            }
        ]
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class PublicRoutingModule {}