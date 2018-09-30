import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HeroesService,Heroe } from '../../servicios/heroes.service';

@Component({
  selector: 'app-buscador',
  templateUrl: './buscador.component.html',
  styleUrls: ['./buscador.component.css']
})
export class BuscadorComponent implements OnInit {

  heroes:Heroe[] = [];

  parametroBusqueda:string = '';

  constructor(private _heroesService:HeroesService,private _activatedRoute:ActivatedRoute) { 

  }

  ngOnInit() {
    this._activatedRoute.params.subscribe(params => {
      console.log(params['valorbusqueda']); // el id es por cómo se puso el parámetro en el route
      this.heroes = this._heroesService.buscarHeroes(params['valorbusqueda']);
      console.log(this.heroes);
      this.parametroBusqueda = params['valorbusqueda'];
    });
    
  }

}
