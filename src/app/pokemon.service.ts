import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class PokemonService {

  private apiUrl = 'https://pokeapi.co/api/v2/pokemon?limit=20'; // Cambia la URL según tu necesidad

  constructor(private http: HttpClient) {}

  getPokemonList() {
    return this.http.get(this.apiUrl).pipe(
      tap(response => {
        console.log('Response from API:', response);
      }),
      catchError(error => {
        console.error('Error from API:', error);
        throw error;
      })
    );
}

}
