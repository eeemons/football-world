import React from "react";
import SwiperSlider from "../../Components/SwiperSlider/SwiperSlider";
import EplModule from "../../Components/EnglishPremiereLeague/EplModule";
import LigueOneModule from "../../Components/Ligue1/LigueOneModule";
import SerieAModule from "../../Components/SerieA/SerieAModule";
import LaligaModule from "../../Components/Laliga/LaligaModule";
import BundesligaModule from "../../Components/Bundesliga/BundesligaModule";
const Home = () => {
  // const key = import.meta.env.VITE_API_KEY;

  return (
    <div className="min-h-screen flex flex-col gap-3">
      <SwiperSlider />
      <div className="mx-3 my-1 lg:mx-20 lg:my-10">
        <h1 className="text-2xl font-bold">Todays fixture</h1>
        <EplModule />
        <LigueOneModule />
        <SerieAModule />
        <LaligaModule />
        <BundesligaModule />
      </div>
    </div>
  );
};

export default Home;
