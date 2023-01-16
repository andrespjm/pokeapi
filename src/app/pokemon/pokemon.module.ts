import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { BannerComponent } from './banner/banner.component';
import { PokemondetailComponent } from './pokemondetail/pokemondetail.component';
import { PokemonlistComponent } from './pokemonlist/pokemonlist.component';

@NgModule({
  declarations: [BannerComponent, PokemonlistComponent, PokemondetailComponent],
  imports: [CommonModule],
  exports: [BannerComponent, PokemonlistComponent, PokemondetailComponent],
})
export class PokemonModule {}
