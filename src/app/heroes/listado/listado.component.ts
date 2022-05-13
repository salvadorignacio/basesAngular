import { Component } from '@angular/core';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
})
export class ListadoComponent {
  heroes: string[] = ['Spiderman', 'Ironman', 'Allmigth', 'Lemillion'];
  heroesEliminados: string[] = [];
  borrarHeroe (){
    const heroeBorrado: string = this.heroes.shift() || '';
    if (heroeBorrado != '') {
      this.heroesEliminados.push(heroeBorrado);
    }


    console.log(this.heroesEliminados);
  }
}

