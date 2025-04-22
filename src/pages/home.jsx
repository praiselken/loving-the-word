import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <h1 className="text-4xl font-bold fontltw">LOVING THE WORD</h1>
      <p className="text-2xl fontdms">EMPOWERED FOR PURPOSE.</p>

      <div>
        <p className="text-5xl mt-2 px-3 py fontltw mt-2">
          FREE DELIVERY ACROSS THE UK
        </p>
      </div>
      <Link
        to="/store"
        className="flex items-center gap-2 mt-4 fontltw border border-[#fffefe] !text-[#fffefe] bg-transparent px-8 py-2 text-3xl rounded-xl hover:bg-[#ff1d1d] transition hover:border-[#ff1d1d]"
      >
        SHOP LTW
      </Link>
    </div>
  );
};

export default Home;
