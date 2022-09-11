import type { NextPage } from "next";
import Layout from "../components/Layout";

const Home: NextPage = () => {
  return (
    <Layout title="Home">
      <div className="w-full min-h-screen">
        <div className="card lg:card-side bg-base-100 shadow-xl">
          <figure>
            <img src="https://placeimg.com/400/400/arch" alt="Album" />
          </figure>
          <div className="card-body">
            <h2 className="card-title">New album is released!</h2>
            <p>Click the button to listen on Spotiwhy app.</p>
            <div className="card-actions justify-end">
              <button className="btn btn-primary">Listen</button>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Home;
