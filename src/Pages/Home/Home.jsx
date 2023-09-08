import React from "react";
import SwiperSlider from "../../Components/SwiperSlider/SwiperSlider";
import EplModule from "../../Components/EnglishPremiereLeague/EplModule";
import LigueOneModule from "../../Components/Ligue1/LigueOneModule";
import SerieAModule from "../../Components/SerieA/SerieAModule";
import LaligaModule from "../../Components/Laliga/LaligaModule";
import BundesligaModule from "../../Components/Bundesliga/BundesligaModule";
import AfricaModule from "../../Components/WorldcupQualifier/Africa/AfricaModule";
import AsiaModule from "../../Components/WorldcupQualifier/Asia/AsiaModule";
import EuropeModule from "../../Components/WorldcupQualifier/Europe/EuropeModule";
import SouthAmericaModule from "../../Components/WorldcupQualifier/SouthAmerica/SouthAmericaModule";
import AfricaCupOfNationModule from "../../Components/InternationalTournament/AfricaCupOfNation/AfricaCupOfNationModule";
import EuroQualifierModule from "../../Components/InternationalTournament/Euro/EuroQualifierModule";
import UCLModule from "../../Components/ChampionsLeague/UCLModule";
const Home = () => {
  // const key = import.meta.env.VITE_API_KEY;

  return (
    <div className="min-h-screen flex flex-col gap-3">
      <SwiperSlider />
      <div className="mx-3 my-1 lg:mx-20 lg:my-10">
        <h1 className="text-2xl font-bold">Todays fixture clubs</h1>
        <EplModule />
        <LigueOneModule />
        <SerieAModule />
        <LaligaModule />
        <BundesligaModule />
        <UCLModule />
        <h1 className="text-2xl font-bold">World cup qualifier</h1>
        <AsiaModule />
        <AfricaModule />
        <EuropeModule />
        <SouthAmericaModule />
        <h1 className="text-2xl font-bold">Intl. Tournaments</h1>
        <EuroQualifierModule />
        <AfricaCupOfNationModule />
      </div>
    </div>
  );
};

export default Home;
