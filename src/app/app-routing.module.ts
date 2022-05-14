import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { KitchenComponent } from './core/kitchen/kitchen.component';
import { DepositComponent } from './core/deposit/deposit.component';

const routes: Routes = [
 { path:'kitchen',
  component:KitchenComponent
 },
 { path:'deposit',
 component:DepositComponent
},
{ path:'**',
redirectTo:'/kitchen'
},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
