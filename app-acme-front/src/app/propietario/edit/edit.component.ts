import { Component, OnInit } from '@angular/core';
import { PropietarioService } from '../propietario.service';
import { ActivatedRoute, Router } from '@angular/router';
import { FormGroup, FormControl, Validators} from '@angular/forms';
import { Propietario } from '../propietario';
import { CiudadService } from 'src/app/ciudad/ciudad.service';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.scss']
})
export class EditComponent implements OnInit {
  id: number;
  propietario: Propietario;
  form: FormGroup;
  ciudadlist;
  constructor(public propietarioService: PropietarioService,private route: ActivatedRoute,private router: Router,private catService:CiudadService) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['idPropietario'];
    this.propietarioService.find(this.id).subscribe((data: Propietario)=>{
      this.propietario = data;
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
    this.propietarioService.update(this.id, this.form.value).subscribe(res => {
         console.log('Propietario editado correctamente!');
         this.router.navigateByUrl('propietario/index');
    })
  }
}
