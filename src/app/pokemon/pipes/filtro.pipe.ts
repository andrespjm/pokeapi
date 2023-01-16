import { Pipe, PipeTransform } from '@angular/core';
import { PokemonI } from '../interfaces/pokemon.interface';

@Pipe({
  name: 'filtro',
})
export class FiltroPipe implements PipeTransform {
  transform(pokemons: PokemonI[], page = 0, filterValue = ''): PokemonI[] {
    const offset = 5;

    if (!filterValue.length) return pokemons.slice(page, page + offset);

    const filterPokemon = pokemons.filter((pokemon) =>
      pokemon.name.includes(filterValue)
    );

    // TODO: Terminar filtro
    return filterPokemon.slice(page, page + offset);
  }
}
