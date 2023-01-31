import { Component } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { Movies } from './movies';
import { MoviesServiceService } from './movies-service.service';



@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.css']

})
export class MoviesComponent {
  movies: Movies[] = [{ image: "/assets/img/pelicula1.png", punctuation: 9.4, name: "Los Increibles 2", link: "https://www.youtube.com/watch?v=ssXatmC1dv0" },
  { image: "/assets/img/pelicula2.jpg", punctuation: 9.4, name: "Buscando a NEMO", link: "https://www.youtube.com/watch?v=fUXvVHbHMyg" },
  { image: "/assets/img/pelicula3.jpg", punctuation: 9.4, name: "Avatar 2", link: "https://www.youtube.com/watch?v=u0hxjdWG84k" },
  { image: "/assets/img/pelicula4.jpg", punctuation: 9.4, name: "Avengers:End Game", link: "https://www.youtube.com/watch?v=KdL8ucqi1F8" },
  { image: "imagen5.png", punctuation: 9.4, name: "pelicula5", link: "link pelicula5" },
  { image: "imagen6.png", punctuation: 9.4, name: "pelicula6", link: "link pelicula6" },
  { image: "imagen7.png", punctuation: 9.4, name: "pelicula7", link: "link pelicula7" },
  { image: "imagen8.png", punctuation: 9.4, name: "pelicula8", link: "link pelicula8" },
  { image: "imagen9.png", punctuation: 9.4, name: "pelicula9", link: "link pelicula9" },
  { image: "imagen10.png", punctuation: 9.4, name: "pelicula10", link: "link pelicula10" },
  { image: "imagen11.png", punctuation: 9.4, name: "pelicula11", link: "link pelicula11" },
  { image: "imagen12.png", punctuation: 9.4, name: "pelicula12", link: "link pelicula12" },
  { image: "imagen13.png", punctuation: 9.4, name: "pelicula13", link: "link pelicula13" },
  { image: "imagen14.png", punctuation: 9.4, name: "pelicula14", link: "link pelicula14" },
  { image: "imagen15.png", punctuation: 9.4, name: "pelicula15", link: "link pelicula15" }];


  constructor(private moviesService: MoviesServiceService) { }

}
