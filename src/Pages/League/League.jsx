import React from "react";
import axios from "axios";
import { useEffect, useState } from "react";
import Competitions from "../../Components/Competitions/Competitions";
import Loader from "../../Components/Loader/Loader";

const League = () => {
  const [leagues, setLeagues] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const key = import.meta.env.VITE_API_KEY;

  useEffect(() => {
    axios
      .get(`https://apiv3.apifootball.com/?action=get_countries&APIkey=${key}`)
      .then((response) => {
        const results = response.data.filter(
          (element) =>
            element.country_id == 44 || //**England country id
            element.country_id == 4 || //** Germany country id
            element.country_id == 6 || //** Spain country id
            element.country_id == 3 || //**France country id
            element.country_id == 5 //**Italy country id
        );
        // console.log(results);
        setLeagues(results);
        setIsLoading(false);
        // console.log(leagues);
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  }, []);
  return (
    <div className="flex flex-col gap-4 min-h-screen">
      {isLoading ? (
        <Loader />
      ) : (
        <div>
          <span className="font-bold text-3xl mt-2 text-center">Leagues</span>
          {leagues?.map((league) => {
            return (
              <div
                className="flex flex-col justify-center mb-10 items-center "
                key={Math.random()}
              >
                <img
                  src={league.country_logo}
                  alt={league.country_name}
                  className="w-[100px] h[50px]"
                />
                <h1 className="text-2xl font-bold p-2">
                  {league.country_name}
                </h1>
                <Competitions countryId={league.country_id} />
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
};

export default League;
