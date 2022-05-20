import { Component, Input } from '@angular/core';
import { Personaje } from '../interfaces/dbz.interface';

@Component({
  selector: 'app-agregar',
  templateUrl: './agregar.component.html',
  styleUrls: ['./agregar.component.css']
})
export class AgregarComponent  {

  @Input() nuevo: Personaje = {
    nombre : '',
    poder: 0
  }

  @Input() personajes: Personaje[] = [];

  agregar () {
    if (this.nuevo.nombre.trim() == ''){
      return;
    }
    console.log(this.nuevo);
    this.personajes.push(this.nuevo);
    this.nuevo = {nombre: '', poder: 0};

  }
}
