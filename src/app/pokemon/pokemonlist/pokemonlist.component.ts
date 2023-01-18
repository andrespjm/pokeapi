import { Component, OnInit } from '@angular/core';
import { PokemonI } from '../interfaces/pokemon.interface';
import { SimplePokemonByNameI } from '../interfaces/pokemonByName.interface';
import { PokemonService } from '../services/pokemon.service';

@Component({
  selector: 'app-pokemonlist',
  templateUrl: './pokemonlist.component.html',
  styleUrls: ['./pokemonlist.component.scss'],
})
export class PokemonlistComponent implements OnInit {
  public pokemons: PokemonI[] = [];
  public page = 0;
  public offset = 5;
  public total = 0;
  public totalPage = 0;
  public totalEntries = 0;
  public filterValue = '';
  public pokeDetail!: SimplePokemonByNameI;
  public onlyPokeName: string[] = [];
  constructor(private pokemonService: PokemonService) {
    this.entries();
  }
  ngOnInit(): void {
    this.pokemonService.getPokemos().subscribe((data) => {
      this.pokemons = data;
      this.onlyPokeName = data.map((d) => d.name);
    });
  }

  nextPage(): void {
    this.page += this.offset;
  }

  prevPage(): void {
    if (this.page > 0) this.page -= this.offset;
  }

  onFilter(valueInput: string) {
    this.page = 0;
    this.filterValue = valueInput.trim();
  }

  onViewPokemon(name: string): void {
    this.pokemonService
      .getPokemoByName(name)
      .subscribe((data) => (this.pokeDetail = data));
  }

  private entries() {
    this.pokemonService.fetchPokeApi().subscribe((data) => {
      this.totalEntries = data.count;
      this.totalPage = Math.ceil(data.count / this.offset);
    });
  }
}
