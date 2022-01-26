import { Component, OnInit } from '@angular/core';
import { PropietarioService } from '../propietario.service';
import { Router } from '@angular/router';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { CiudadService } from 'src/app/ciudad/ciudad.service';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.scss']
})
export class CreateComponent implements OnInit {
  ciudadlist;
  form: FormGroup;
  constructor(public propietarioService: PropietarioService,private router: Router,private catService:CiudadService) { }

  ngOnInit(): void {
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
    this.propietarioService.create(this.form.value).subscribe(res => {
         console.log('Propietario creado correctamente!');
         this.router.navigateByUrl('propietario/index');
    })
  }

}
