import { Component, OnInit } from '@angular/core';

import { ConductorService } from '../conductor.service';
import { ActivatedRoute, Router } from '@angular/router';
import { FormGroup, FormControl, Validators} from '@angular/forms';
import { Conductor } from '../conductor';
import { CiudadService } from 'src/app/ciudad/ciudad.service';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.scss']
})
export class EditComponent implements OnInit {

  id: number;
  conductor: Conductor;
  form: FormGroup;
  ciudadlist;
  constructor(public conductorService: ConductorService,private route: ActivatedRoute,private router: Router,private catService:CiudadService) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['idConductor'];
    this.conductorService.find(this.id).subscribe((data: Conductor)=>{
      this.conductor = data;
  });
    this.form = new FormGroup({
      id:  new FormControl('', [ Validators.required]),
      primer_nombre: new FormControl('', [ Validators.required]),
      apellidos: new FormControl('', [ Validators.required]),
      direccion: new FormControl('', [ Validators.required]),
      telefono: new FormControl('', [ Validators.required]),
      id_ciudad: new FormControl('', [ Validators.required])
    });
    this.catService.getAll().subscribe(data =>
      {
        this.ciudadlist = data;
      });
  }
  get f(){
    return this.form.controls;
  }

  submit(){
    console.log(this.form.value);
    this.conductorService.update(this.id, this.form.value).subscribe(res => {
         console.log('Conductor editado correctamente!');
         this.router.navigateByUrl('conductor/index');
    })
  }
}
