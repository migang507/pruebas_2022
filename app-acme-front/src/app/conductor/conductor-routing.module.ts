import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { IndexComponent } from './index/index.component';
import { CreateComponent } from './create/create.component';
import { EditComponent } from './edit/edit.component';

const routes: Routes = [
  { path: 'conductor', redirectTo: 'conductor/index', pathMatch: 'full'},
  { path: 'conductor/index', component: IndexComponent },
  { path: 'conductor/create', component: CreateComponent },
  { path: 'conductor/edit/:idConductor', component: EditComponent } 
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ConductorRoutingModule { }
