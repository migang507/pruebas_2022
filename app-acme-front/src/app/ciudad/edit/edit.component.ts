import { Component, OnInit } from '@angular/core';
import { CiudadService } from '../ciudad.service';
import { ActivatedRoute, Router } from '@angular/router';
import { FormGroup, FormControl, Validators} from '@angular/forms';
import { Ciudad } from '../ciudad';
@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.scss']
})
export class EditComponent implements OnInit {
  
  id: number;
  ciudad: Ciudad;
  form: FormGroup;
  constructor(public ciudadService: CiudadService,private route: ActivatedRoute,private router: Router) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['idCiudad'];
    this.ciudadService.find(this.id).subscribe((data: Ciudad)=>{
    this.ciudad = data;
  });
    this.form = new FormGroup({
      nombre:  new FormControl('', [ Validators.required ])
    });
  }
  get f(){
    return this.form.controls;
  }
  submit(){
    console.log(this.form.value);
    this.ciudadService.update(this.id, this.form.value).subscribe(res => {
         console.log('Ciudad actualizada correctamente!');
         this.router.navigateByUrl('ciudad/index');
    })
  }
}
