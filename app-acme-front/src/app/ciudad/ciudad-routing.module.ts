import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { IndexComponent } from './index/index.component';
import { CreateComponent } from './create/create.component';
import { EditComponent } from './edit/edit.component';
const routes: Routes = [
  { path: 'ciudad', redirectTo: 'ciudad/index', pathMatch: 'full'},
  { path: 'ciudad/index', component: IndexComponent },
  { path: 'ciudad/create', component: CreateComponent },
  { path: 'ciudad/edit/:idCiudad', component: EditComponent } 
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CiudadRoutingModule { }
