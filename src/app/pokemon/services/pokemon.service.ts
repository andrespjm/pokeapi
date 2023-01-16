import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { GetAllPokemonsI, PokemonI } from '../interfaces/pokemon.interface';

@Injectable({
  providedIn: 'root',
})
export class PokemonService {
  private url: string = 'https://pokeapi.co/api/v2';

  constructor(private http: HttpClient) {}

  public fetchPokeApi(): Observable<GetAllPokemonsI> {
    return this.http.get<GetAllPokemonsI>(`${this.url}/pokemon?limit=1500`);
  }

  public getPokemos(): Observable<PokemonI[]> {
    return this.fetchPokeApi().pipe(map(this.templatePokemon));
  }

  private templatePokemon(res: GetAllPokemonsI): PokemonI[] {
    const pokemons = res.results.map((pokemon) => {
      const arr = pokemon.url.split('/');
      const id = arr[6];
      const urlImg = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`;
      return {
        id,
        name: pokemon.name,
        urlImg,
      };
    });

    return pokemons;
  }
}
