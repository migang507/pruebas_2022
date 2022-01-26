import { Component, OnInit } from '@angular/core';
import { CiudadService } from '../ciudad.service';
import { Ciudad } from '../ciudad';
@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.scss']
})
export class IndexComponent implements OnInit {
  ciudades: Ciudad[] = [];
  constructor(public ciudadService: CiudadService) { }

  ngOnInit(): void {
    this.ciudadService.getAll().subscribe((data: Ciudad[])=>{
      this.ciudades = data;
      console.log(this.ciudades);
    })
  }
  deleteCiudad(id){
    this.ciudadService.delete(id).subscribe(res => {
         this.ciudades = this.ciudades.filter(item => item.id !== id);
         console.log('Eliminacion de ciudad!');
    })
  }
}
