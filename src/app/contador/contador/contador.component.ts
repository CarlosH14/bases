
import { Component } from '@angular/core';

@Component({
    selector: 'app-contador',
    template: `
        <h1> {{title}} </h1>

        <h3>Base: <strong> {{base}} </strong></h3>

        <button (click)=" acumular( base )  "> +{{base}} </button>

        <span> {{numero}} </span>

        <button (click)=" acumular( base * -1 ) "> -{{base}} </button>
    `
    
})
export class ContadorComponent {
    title = 'bases';
    numero :number = 10 ;
    base :number = 5;

    acumular( valor :number){
        this.numero += valor
    }
}