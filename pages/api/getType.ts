import { PokemonClient, Type } from "pokenode-ts";
const api = new PokemonClient();

export default async function getPokemons(id: number): Promise<Type> {
  const response: Type = await api
    .getTypeById(id)
    .then((type) => type)
    .catch((error) => error);

  return response;
}
