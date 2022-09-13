import { PokemonClient, Pokemon } from "pokenode-ts";
const api = new PokemonClient();

interface Result {
  results: Pokemon[];
  next: string;
  previous: string | null;
  count: number;
}

export default async function getPokemons(
  offset: number,
  limit: number
): Promise<Result> {
  const response: Result = await api
    .listPokemons(offset, limit)
    .then((pokemons) => pokemons)
    .catch((error) => error);

  return response;
}
