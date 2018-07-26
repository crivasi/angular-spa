import { RouterModule, Routes, Router, ROUTES, provideRoutes } from '@angular/router';

import {HomeComponent} from './components/home/home.component';
import {AboutComponent} from './components/about/about.component';
import {HeroesComponent} from './components/heroes/heroes.component';
import {HeroeComponent} from './components/heroe/heroe.component';
import {BuscadorComponent} from './components/buscador/buscador.component';



const APP_ROUTES: Routes = [
    { path: 'home', component: HomeComponent },
    { path: 'about', component: AboutComponent },
    { path: 'heroes', component: HeroesComponent },
    { path: 'heroes/:id', component: HeroeComponent },
    { path: 'buscar/:valorbusqueda', component: BuscadorComponent },
    // { path: 'heroe/:id', component: HeroeComponent }, //con esta ruta se llama desde la raiz
    { path: '**', pathMatch:'full', redirectTo: 'home' }
];

export const APP_ROUTING = RouterModule.forRoot(APP_ROUTES,{useHash:true});
//el usehash:true es para poner # en las urls, es aconsejable para cuando se usan parámetros
