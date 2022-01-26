import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { VehiculoModule } from './vehiculo/vehiculo.module';
import { ConductorModule } from './conductor/conductor.module';
import { CiudadModule } from './ciudad/ciudad.module';
import { PropietarioModule } from './propietario/propietario.module';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    VehiculoModule,
    ConductorModule,
    CiudadModule,
    PropietarioModule,
    HttpClientModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
