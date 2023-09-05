import React from "react";
import SwiperSlider from "../../Components/SwiperSlider/SwiperSlider";
import EplModule from "../../Components/EnglishPremiereLeague/EplModule";
import LigueOneModule from "../../Components/Ligue1/LigueOneModule";

const Home = () => {
  // const key = import.meta.env.VITE_API_KEY;

  return (
    <div className="min-h-screen flex flex-col gap-3">
      <SwiperSlider />
      <div className="mx-3 my-1 lg:mx-20 lg:my-10">
        <h1 className="text-2xl font-bold">Todays fixture</h1>
        <EplModule />
        <LigueOneModule />
      </div>
    </div>
  );
};

export default Home;
