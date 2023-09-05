import React from "react";
import SwiperSlider from "../../Components/SwiperSlider/SwiperSlider";
import EplModule from "../../Components/EnglishPremiereLeague/EplModule";

const Home = () => {
  // const key = import.meta.env.VITE_API_KEY;

  return (
    <div className="min-h-screen flex flex-col gap-3">
      <SwiperSlider />
      <h1 className="text-2xl font-bold">Todays fixture</h1>
      <EplModule />
    </div>
  );
};

export default Home;
