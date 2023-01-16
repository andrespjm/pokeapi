import { Component } from '@angular/core';
import { SimplePokemonByNameI } from '../interfaces/pokemonByName.interface';
import { PokemonService } from '../services/pokemon.service';

@Component({
  selector: 'app-pokemondetail',
  templateUrl: './pokemondetail.component.html',
  styleUrls: ['./pokemondetail.component.scss'],
})
export class PokemondetailComponent {
  constructor(private pokemonService: PokemonService) {}
  public pokeDetail: SimplePokemonByNameI | null = null;

  onViewPokemon(name: string): void {
    this.pokemonService
      .getPokemoByName(name)
      .subscribe((data) => (this.pokeDetail = data));
  }
}
