import Head from "next/head";
import Header from "./Header";
import Footer from "./Footer";
import useTheme from "../hooks/useTheme";

interface Props {
  children: JSX.Element;
  title?: string;
}

const Layout = ({ children, title = "" }: Props) => {
  const { darkMode } = useTheme();

  return (
    <div className="flex flex-col" data-theme={darkMode ? "dark" : "light"}>
      <Head>
        <title>UltraDEX {title ? `- ${title}` : ""}</title>
        <meta name="description" content="The definitive Pokedex" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <main className="min-h-screen p-5 flex justify-center align-middle">
        {children}
      </main>
      <Footer />
    </div>
  );
};

export default Layout;
