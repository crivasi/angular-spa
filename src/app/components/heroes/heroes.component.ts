import { Component, OnInit } from '@angular/core';

import { HeroesService, Heroe } from '../../servicios/heroes.service';

import { Router } from "@angular/router";

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styles: []
})
export class HeroesComponent implements OnInit {

  heroes:Heroe[] = [];

  constructor(private _heroesService:HeroesService,private _router:Router) { //esto hace que se ejecute el constructor del servicio heroes y se pueda usar la variable heroesService como atributo de la clase
    //primero se ejecuta el constructor y luego el ngOnInit
  }

  ngOnInit() {
    this.heroes = this._heroesService.getHeroes();
    console.log(this.heroes);
  }

  verHeroe(idHeroe:number){
    console.log(idHeroe);
    this._router.navigate(['heroes',idHeroe]);
  }
}
