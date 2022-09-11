import { SunIcon, MoonIcon } from "@heroicons/react/24/outline";
import Link from "next/link";
import useTheme from "../hooks/useTheme";

const Header = () => {
  const { darkMode, toggleDarkMode } = useTheme();

  return (
    <nav className="navbar bg-base-200 sticky top-0 z-40">
      <div className="navbar-start rounded-md">
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </label>
          <ul
            tabIndex={0}
            className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
          >
            <li>
              <Link href="/pokemons">Pokémons</Link>
            </li>
            <li tabIndex={0}>
              <Link href="/items">Items</Link>
            </li>
            <li>
              <Link href="/berries">Berries</Link>
            </li>
          </ul>
        </div>
        <div className="btn btn-ghost normal-case text-xl">
          <Link href="/">UltraDEX</Link>
        </div>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal p-0">
          <li>
            <Link href="/pokemons">Pokémons</Link>
          </li>
          <li tabIndex={0}>
            <Link href="/items">Items</Link>
          </li>
          <li>
            <Link href="/berries">Berries</Link>
          </li>
        </ul>
      </div>
      <div className="navbar-end">
        <button className="btn btn-square btn-outline" onClick={toggleDarkMode}>
          {darkMode ? (
            <SunIcon className="h6 w-6" />
          ) : (
            <MoonIcon className="h-6 w-6" />
          )}
        </button>
      </div>
    </nav>
  );
};

export default Header;
