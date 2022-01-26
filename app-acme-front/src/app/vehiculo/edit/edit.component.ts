import { Component, OnInit } from '@angular/core';
import { VehiculoService } from '../vehiculo.service';
import { ActivatedRoute, Router } from '@angular/router';
import { FormGroup, FormControl, Validators} from '@angular/forms';
import { Vehiculo } from '../vehiculo';
import { PropietarioService } from 'src/app/propietario/propietario.service';
import { ConductorService } from 'src/app/conductor/conductor.service';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.scss']
})
export class EditComponent implements OnInit {
  id: number;
  propietariolist;
  conductorlist;
  vehiculo: Vehiculo;
  form: FormGroup;

  constructor(public vehiculoService: VehiculoService,private route: ActivatedRoute,private router: Router,private catService:PropietarioService,private catService2:ConductorService) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['idVehiculo'];
    this.vehiculoService.find(this.id).subscribe((data: Vehiculo)=>{
      this.vehiculo = data;
    });

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
    this.vehiculoService.update(this.id, this.form.value).subscribe(res => {
         console.log('vehiculo actualizado!');
         this.router.navigateByUrl('vehiculo/index');
    })
  }
}
