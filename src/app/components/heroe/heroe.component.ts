import { Component, OnInit } from '@angular/core';

import { ActivatedRoute } from "@angular/router";

import { HeroesService,Heroe  } from "../../servicios/heroes.service";

@Component({
  selector: 'app-heroe',
  templateUrl: './heroe.component.html',
  styleUrls: ['./heroe.component.css']
})
export class HeroeComponent implements OnInit {

  heroe:Heroe;

  constructor(private _activatedRoute:ActivatedRoute,private _heroesService:HeroesService) { 

    this._activatedRoute.params.subscribe(params => {
      console.log(params['id']); // el id es por cómo se puso el parámetro en el route
      this.heroe = this._heroesService.getHeroe(params['id']);
    });
  }

  ngOnInit() {
  }

}
