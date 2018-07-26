import { Component, OnInit,Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-heroe-tarjeta',
  templateUrl: './heroe-tarjeta.component.html',
  styleUrls: ['./heroe-tarjeta.component.css']
})
export class HeroeTarjetaComponent implements OnInit {

  @Input() heroe:any = {}; //el decorador es para decirle que puede venir desde afuera
  @Input() codigoHeroe:number;

  constructor(private _router:Router) { }

  ngOnInit() {
  }

  verHeroe(){
    console.log(this.codigoHeroe);
    this._router.navigate(['heroes',this.codigoHeroe]);
  }

}
