import { useState } from "react";
import { PokemonClient, Pokemon } from "pokenode-ts";
import InfiniteScroll from "react-infinite-scroll-component";
import getPokemons from "../pages/api/getPokemons";
import getPokemon from "../pages/api/getPokemon";
import PokemonCard from "./PokemonCard";

interface Props {
  initialPokemons: Pokemon[];
}

const api = new PokemonClient();
const LIMIT = 8;

const renderPokemons = (pokemons: Pokemon[]): JSX.Element[] => {
  return pokemons.map((pokemon, index) => (
    <PokemonCard key={index} pokemon={pokemon} />
  ));
};

const InfinitePokemonScrolling = ({ initialPokemons }: Props) => {
  const [pokemons, setPokemons] = useState<Pokemon[]>([...initialPokemons]);
  const [offset, setOffset] = useState(8);

  const getNewPokemons = async (offset: number, limit: number) => {
    const data = await getPokemons(offset, limit);
    const pokemons = await Promise.all(
      data.results.map(
        async (pokemon: Pokemon) => await getPokemon(pokemon.name)
      )
    );

    setPokemons((p) => [...p, ...pokemons]);
    setOffset((p) => p + 20);
  };

  return (
    <InfiniteScroll
      dataLength={pokemons.length}
      next={() => getNewPokemons(offset, LIMIT)}
      hasMore={true}
      loader={<h4>Loading...</h4>}
    >
      <div className="w-[95vw] md:w-[75vw] grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 auto-rows-auto h-auto gap-4">
        {renderPokemons(pokemons)}
      </div>
    </InfiniteScroll>
  );
};

export default InfinitePokemonScrolling;
