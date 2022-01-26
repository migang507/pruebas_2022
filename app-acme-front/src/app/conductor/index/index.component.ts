import { Component, OnInit } from '@angular/core';
import { ConductorService } from '../conductor.service';
import { Conductor } from '../conductor';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.scss']
})
export class IndexComponent implements OnInit {

  conductores: Conductor[] = [];
  constructor(public conductorService: ConductorService) { }

  ngOnInit(): void {
    this.conductorService.getAll().subscribe((data: Conductor[])=>{
      this.conductores = data;
      console.log(this.conductores);
    })
  }
  deleteConductor(id){
    this.conductorService.delete(id).subscribe(res => {
         this.conductores = this.conductores.filter(item => item.id !== id);
         console.log('Eliminacion de conductor!');
    })
  }
}
