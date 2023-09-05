import React from "react";
import axios from "axios";
import { useLayoutEffect, useState } from "react";
import Competitions from "../../Components/Competitions/Competitions";

const League = () => {
  const [leagues, setLeagues] = useState([]);
  const key = import.meta.env.VITE_API_KEY;

  useLayoutEffect(() => {
    axios
      .get(`https://apiv3.apifootball.com/?action=get_countries&APIkey=${key}`)
      .then((response) => {
        const results = response.data.filter(
          (element) =>
            element.country_id == 44 ||
            element.country_id == 4 ||
            element.country_id == 6 ||
            element.country_id == 3 ||
            element.country_id == 5
        );
        // console.log(results);
        setLeagues(results);
        // console.log(leagues);
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  }, []);
  return (
    <div className="flex flex-col gap-4 min-h-screen">
      <span className="font-bold text-3xl mt-2 text-center">Leagues</span>
      {leagues?.map((league) => {
        return (
          <div
            className="flex flex-col justify-center items-center md:flex-row"
            key={Math.random()}
          >
            <img
              src={league.country_logo}
              alt={league.country_name}
              className="w-[100px] h[50px]"
            />
            <h1 className="text-2xl font-bold p-2">{league.country_name}</h1>
            <Competitions countryId={league.country_id} />
          </div>
        );
      })}
    </div>
  );
};

export default League;
