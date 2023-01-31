import { Injectable } from '@angular/core';
import { MOVIES } from './mock-movies';
import { Movies } from './movies';

@Injectable ({
  providedIn: 'root'
  
})
export class MoviesServiceService {

  getMeroes(): Movies[] {
    return MOVIES;

  }

  constructor() { 
    
  }
}
