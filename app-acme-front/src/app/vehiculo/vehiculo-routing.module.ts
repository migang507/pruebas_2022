import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { IndexComponent } from './index/index.component';
import { CreateComponent } from './create/create.component';
import { EditComponent } from './edit/edit.component';

const routes: Routes = [
  { path: 'vehiculo', redirectTo: 'vehiculo/index', pathMatch: 'full'},
  { path: 'vehiculo/index', component: IndexComponent },
  { path: 'vehiculo/create', component: CreateComponent },
  { path: 'vehiculo/edit/:idVehiculo', component: EditComponent } 
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class VehiculoRoutingModule { }
