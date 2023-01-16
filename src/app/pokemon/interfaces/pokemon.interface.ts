export interface GetAllPokemonsI {
  count: number;
  next: null;
  previous: null;
  results: SimplePokemonI[];
}

export interface SimplePokemonI {
  name: string;
  url: string;
}

export interface PokemonI {
  id: string;
  name: string;
  urlImg: string;
}
