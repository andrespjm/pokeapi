import { Component, Input } from '@angular/core';
import { SimplePokemonByNameI } from '../interfaces/pokemonByName.interface';

@Component({
  selector: 'app-pokemondetail',
  templateUrl: './pokemondetail.component.html',
  styleUrls: ['./pokemondetail.component.scss'],
})
export class PokemondetailComponent {
  @Input() inputPokeDatail!: SimplePokemonByNameI;
}
//  TODO: La interface SimplePokemonByNameI debe tambien contemplar el name y urlImg y se necesita poner un preload
