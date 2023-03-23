import { Component } from '@angular/core';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
  styleUrls: ['./listado.component.css']
})
export class ListadoComponent {

    heroes :string[] = ['Spiderman', 'Ironman', 'Hulk', 'Thor', 'Capitan América'];
    heroeBorrado :string = "";
    borrarHeroe() :void {
      const heroe = this.heroes.pop();
      this.heroeBorrado =  heroe? heroe : "";
    }

  }
