import { Pokemon } from "pokenode-ts";
import Layout from "../components/Layout";
import getPokemons from "./api/getPokemons";
import getPokemon from "./api/getPokemon";
import InfinitePokemonScrolling from "../components/InfinitePokemonScrolling";

interface Props {
  pokemons: Pokemon[];
}

const Pokemons = ({ pokemons }: Props) => {
  return (
    <Layout title="Pokémons">
      <InfinitePokemonScrolling initialPokemons={pokemons} />
    </Layout>
  );
};

export async function getStaticProps() {
  const data = await getPokemons(0, 8);
  const pokemons = await Promise.all(
    data.results.map(async (pokemon: Pokemon) => await getPokemon(pokemon.name))
  );

  return {
    props: {
      pokemons: JSON.parse(JSON.stringify(pokemons)),
    },
  };
}

export default Pokemons;
