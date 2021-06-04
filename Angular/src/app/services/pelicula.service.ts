import { Injectable } from '@angular/core';
import { Pelicula } from '../models/pelicula';

@Injectable()
export class PeliculaService{

    HolaMundo(){
        return "Hola Mundo desde un servicio de Angular";
    }
}