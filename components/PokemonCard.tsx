import { Pokemon } from "pokenode-ts";
import padLeadingZeros from "../utils/padLeadingZeros";
import capitalizeFirstLetter from "../utils/capitalizeFirstLetter";
import getTypeName from "../utils/getTypeName";
import replaceSlash from "../utils/replaceSlash";
import colors from "../styles/types.module.css";
import Link from "next/link";

interface Props {
  pokemon: Pokemon;
}

const PokemonCard = ({ pokemon }: Props) => {
  const { name, id, types } = pokemon;
  const typeColor = getTypeName(types);

  return (
    <Link href="/">
      <div
        className={`h-[400px] rounded-xl flex justify-center items-center flex-col gap-y-3 ${colors[typeColor]} cursor-pointer`}
      >
        <div className="w-full h-[60%]">
          <div className="flex justify-between items-center p-5">
            <span className="text-2xl text-white">
              {replaceSlash(capitalizeFirstLetter(name))}
            </span>
            <span className="text-2xl text-white border-b-4">
              {`#${padLeadingZeros(id.toString(), 3)}`}
            </span>
          </div>
        </div>
        <figure className={`absolute rounded-full bg-white/20`}>
          <img
            className="w-48 h-auto"
            src={
              pokemon.sprites.other?.["official-artwork"].front_default ||
              pokemon.sprites.front_default ||
              ""
            }
            loading="lazy"
          />
        </figure>
        <div className="w-full h-[40%] rounded-t-3xl rounded-b-xl"></div>
      </div>
    </Link>
  );
};

export default PokemonCard;
