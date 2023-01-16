import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.scss'],
})
export class FilterComponent {
  @Output() filterPokemon = new EventEmitter<string>();
  public filterValue = '';

  constructor() {}

  onFilterChange(valueInput: string): void {
    this.filterValue = valueInput;
    this.filterPokemon.emit(valueInput);
  }
}
