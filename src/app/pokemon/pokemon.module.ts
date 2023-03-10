import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BannerComponent } from './banner/banner.component';
import { FilterComponent } from './filter/filter.component';
import { FiltroPipe } from './pipes/filtro.pipe';
import { PokemondetailComponent } from './pokemondetail/pokemondetail.component';
import { PokemonlistComponent } from './pokemonlist/pokemonlist.component';
import { SummarytableComponent } from './summarytable/summarytable.component';

@NgModule({
  declarations: [
    BannerComponent,
    PokemonlistComponent,
    PokemondetailComponent,
    FiltroPipe,
    FilterComponent,
    SummarytableComponent,
  ],
  imports: [CommonModule, FormsModule],
  exports: [BannerComponent, PokemonlistComponent, PokemondetailComponent],
})
export class PokemonModule {}
