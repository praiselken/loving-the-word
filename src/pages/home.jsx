import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <h1 className="text-6xl font-bold fontltw">LOVING THE WORD</h1>
      <p className="text-lg mt-2 fontdms">EMPOWERED FOR PURPOSE.</p>

      <Link
        to="/store"
        className="flex items-center gap-2 mt-4 fontltw border border-[#fffefe] text-[#fffefe] bg-transparent px-4 py-2 rounded-md hover:bg-[#ff1d1d] transition hover:border-[#ff1d1d]"
      >
        SHOP LTW
      </Link>
    </div>
  );
};

export default Home;
