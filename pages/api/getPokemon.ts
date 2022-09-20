import { PokemonClient, Pokemon } from "pokenode-ts";
const api = new PokemonClient();

export default async function getPokemon(name: string): Promise<Pokemon> {
  const response: Pokemon = await api
    .getPokemonByName(name)
    .then((pokemon) => pokemon)
    .catch((error) => error);

  return response;
}
