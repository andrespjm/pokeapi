import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import {
  FetchAllPokemonsResponse,
  PokemonI,
} from '../interfaces/pokemon.interface';
import {
  FetchPokemonByNameResponse,
  SimplePokemonByNameI,
} from '../interfaces/pokemonByName.interface';

@Injectable({
  providedIn: 'root',
})
export class PokemonService {
  private url = 'https://pokeapi.co/api/v2/pokemon';
  private limit = 1500;

  constructor(private http: HttpClient) {}

  public fetchPokeApi(): Observable<FetchAllPokemonsResponse> {
    return this.http.get<FetchAllPokemonsResponse>(
      `${this.url}?limit=${this.limit}`
    );
  }

  public fetchPokeApiByName(name: string) {
    return this.http.get<FetchPokemonByNameResponse>(
      `${this.url}/${name.toLowerCase()}`
    );
  }

  public getPokemos(): Observable<PokemonI[]> {
    return this.fetchPokeApi().pipe(map(this.templatePokemon));
  }

  public getPokemoByName(name: string): Observable<SimplePokemonByNameI> {
    return this.fetchPokeApiByName(name).pipe(map(this.templatePokemonByName));
  }

  private templatePokemonByName(
    res: FetchPokemonByNameResponse
  ): SimplePokemonByNameI {
    const id = String(res.id);
    const species = res.species.name;
    const name = species;
    const urlImg = res.sprites.front_default;
    const abilities = res.abilities.map((a) => a.ability.name);
    const height = res.height;
    const weight = res.weight;
    const types = res.types.map((t) => t.type.name);
    const base_experience = res.base_experience;
    return {
      id,
      name,
      urlImg,
      abilities,
      species,
      height,
      weight,
      types,
      base_experience,
    };
  }

  private templatePokemon(res: FetchAllPokemonsResponse): PokemonI[] {
    const pokemons = res.results.map((pokemon) => {
      const arr = pokemon.url.split('/');
      const id = arr[6];
      const urlPicture =
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon';
      const urlImg = `${urlPicture}/${id}.png`;
      return {
        id,
        name: pokemon.name,
        urlImg,
      };
    });

    return pokemons;
  }
}
