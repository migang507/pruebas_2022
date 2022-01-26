import { Component, OnInit } from '@angular/core';
import { VehiculoService } from '../vehiculo.service';
import { Router } from '@angular/router';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { PropietarioService } from 'src/app/propietario/propietario.service';
import { ConductorService } from 'src/app/conductor/conductor.service';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.scss']
})
export class CreateComponent implements OnInit {
  propietariolist;
  conductorlist;
  form: FormGroup;
  constructor(public vehiculoService: VehiculoService,private router: Router,private catService:PropietarioService,private catService2:ConductorService) { }

  ngOnInit(): void {
    this.form = new FormGroup({
      placa:  new FormControl('', [ Validators.required ]),
      color:  new FormControl('', [ Validators.required ]),
      marca:  new FormControl('', [ Validators.required ]),
      id_tipo_vehiculo: new FormControl('', [ Validators.required ]),
      id_conductor:  new FormControl('', [ Validators.required ]),
      id_propietario: new FormControl('', [ Validators.required ])
    });
    this.catService.getAll().subscribe(data =>
      {
        this.propietariolist = data;
      });
      this.catService2.getAll().subscribe(data =>
        {
          this.conductorlist = data;
        });
  }
  get f(){
    return this.form.controls;
  }
  submit(){
    console.log(this.form.value);
    this.vehiculoService.create(this.form.value).subscribe(res => {
         console.log('Vehiculo creado correctamente!');
         this.router.navigateByUrl('vehiculo/index');
    })

  }

}