import { Component, OnInit } from '@angular/core';
import { CiudadService } from '../ciudad.service';
import { Router } from '@angular/router';
import { FormGroup, FormControl, Validators } from '@angular/forms';
@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.scss']
})
export class CreateComponent implements OnInit {
  form: FormGroup;
  constructor( public ciudadService: CiudadService,private router: Router) { }

  ngOnInit(): void {
    this.form = new FormGroup({
      nombre:  new FormControl('', [ Validators.required ])
    });
  }
  get f(){
    return this.form.controls;
  }
  submit(){
    console.log(this.form.value);
    this.ciudadService.create(this.form.value).subscribe(res => {
         console.log('Ciudad creada correctamente!');
         this.router.navigateByUrl('ciudad/index');
    })
  }
}
