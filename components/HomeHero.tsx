import Image from "next/image";
import PokeballCanvas from "./PokeballCanvas";

const HomeHero = () => {
  return (
    <div className="hero min-h-screen w-full">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <div className="text-center lg:text-left">
          <h1 className="text-5xl font-bold">Welcome to UltraDEX!</h1>
          <p className="py-6 text-xl">
            The ultimate Pokédex where you will find all the information about
            your favorite Pokémons, items, berries, and much more.
          </p>
        </div>
        <div className="flex-shrink-0 w-[60vw] max-w-md h-80 md:h-96">
          {/* <Image src="/Pokeball.webp" layout="fill" /> */}
          <PokeballCanvas />
        </div>
      </div>
    </div>
  );
};

export default HomeHero;
