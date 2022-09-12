import type { NextPage } from "next";
import HomeHero from "../components/HomeHero";
import Layout from "../components/Layout";

const Home: NextPage = () => {
  return (
    <Layout title="Home">
      <div className="w-full min-h-screen">
        <HomeHero />
      </div>
    </Layout>
  );
};

export default Home;
