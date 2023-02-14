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
  { image: "/assets/img/pelicula2.jpg", punctuation: 9, name: "Buscando a NEMO", link: "https://www.youtube.com/watch?v=fUXvVHbHMyg" },
  { image: "/assets/img/pelicula3.jpg", punctuation: 7, name: "Avatar 2", link: "https://www.youtube.com/watch?v=u0hxjdWG84k" },
  { image: "/assets/img/pelicula4.jpg", punctuation: 9.8, name: "Avengers:End Game", link: "https://www.youtube.com/watch?v=KdL8ucqi1F8" },
  { image: "/assets/img/pelicula5.jpg", punctuation: 9.9, name: "El gato con botas 2", link:"https://www.youtube.com/watch?v=18v5EPO5ySs" },
  { image: "/assets/img/pelicula6.jpg", punctuation: 9.4, name: "Iron man", link: "https://www.youtube.com/watch?v=8ugaeA-nMTc" },
  { image: "/assets/img/pelicula7.jpg", punctuation: 9.4, name: "Aliens", link: "https://www.youtube.com/watch?v=oSeQQlaCZgU" },
  { image: "/assets/img/pelicula8.jpg", punctuation: 9.4, name: "Shang Shi", link: "https://www.youtube.com/watch?v=BD77EOU8N3o" },
  { image: "/assets/img/pelicula 9.jpg", punctuation: 9.4, name: "avatar", link: "https://www.youtube.com/watch?v=5PSNL1qE6VY" },
  { image: "/assets/img/pelicula10.jpg", punctuation: 9.4, name: "Wolverine", link: "https://www.youtube.com/watch?v=zVErgcoIno8" },
  { image: "/assets/img/pelicula11.jpg", punctuation: 9.4, name: "Aquaman", link: "https://www.youtube.com/watch?v=WDkg3h8PCVU" },
  { image: "/assets/img/pelicula12.jpg", punctuation: 9.4, name: "Deadpool", link: "https://www.youtube.com/watch?v=0JnRdfiUMa8" },
  { image: "/assets/img/pelicula13.jpg", punctuation: 9.4, name: "CivilWar", link: "https://www.youtube.com/watch?v=-ByYxIjmLsI" },
  { image: "/assets/img/pelicula14.jpg", punctuation: 9.4, name: "It", link: "https://www.youtube.com/watch?v=_oBZ_zTz0Nw" },
  { image: "/assets/img/pelicula15.jpg", punctuation: 9.4, name: "Gladiator", link: "https://www.youtube.com/watch?v=owK1qxDselE" }];

  

  
  


  constructor(private moviesService: MoviesServiceService) { }

}
