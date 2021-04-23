import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PublicRoutingModule } from './public/public-routing.module';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'public',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
