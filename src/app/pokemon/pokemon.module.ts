import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BannerComponent } from './banner/banner.component';
import { FiltroPipe } from './pipes/filtro.pipe';
import { PokemondetailComponent } from './pokemondetail/pokemondetail.component';
import { PokemonlistComponent } from './pokemonlist/pokemonlist.component';

@NgModule({
  declarations: [
    BannerComponent,
    PokemonlistComponent,
    PokemondetailComponent,
    FiltroPipe,
  ],
  imports: [CommonModule, FormsModule],
  exports: [BannerComponent, PokemonlistComponent, PokemondetailComponent],
})
export class PokemonModule {}
