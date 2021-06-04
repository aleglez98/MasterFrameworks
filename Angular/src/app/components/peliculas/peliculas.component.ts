import { Component, OnInit } from '@angular/core';
import  { Pelicula } from '../../models/pelicula';
import { PeliculaService } from '../../services/pelicula.service';

@Component({
  selector: 'app-peliculas',
  templateUrl: './peliculas.component.html',
  styleUrls: ['./peliculas.component.css'],
  providers: [PeliculaService]
})
export class PeliculasComponent implements OnInit {

  public titulo: string;
  public peliculas: Pelicula[];
  public favorita: Pelicula;
  constructor(
    private _peliculaService: PeliculaService
  ) { 
    this.titulo = "Componente peliculas";
    this.peliculas = [
      new Pelicula("Spiderman 4",2019,"https://i.pinimg.com/736x/15/09/8c/15098ceb7af1464b90360bcf26a2e98f.jpg"),
      new Pelicula("Los Vengadores: EndGame",2018,"https://i.pinimg.com/736x/15/09/8c/15098ceb7af1464b90360bcf26a2e98f.jpg"),
      new Pelicula("Hulk",2009,"https://i.pinimg.com/736x/15/09/8c/15098ceb7af1464b90360bcf26a2e98f.jpg")
    ];
  }

  ngOnInit(): void {
    console.log(this._peliculaService.HolaMundo());
  }

  mostrarFavorita(event){
    console.log(event);
    this.favorita = event.movie;
  }


}
