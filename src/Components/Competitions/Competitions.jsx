import React from "react";
import axios from "axios";
import { useLayoutEffect, useState } from "react";
import { Link } from "react-router-dom";

const Competitions = ({ countryId }) => {
  const [competitions, setCompetitions] = useState([]);
  const key = import.meta.env.VITE_API_KEY;
  useLayoutEffect(() => {
    axios
      .get(
        `https://apiv3.apifootball.com/?action=get_leagues&country_id=${countryId}&APIkey=${key}`
      )
      .then((response) => {
        setCompetitions(response.data);
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  }, []);

  return (
    <div>
      {competitions?.map((competition) => {
        return (
          <div className="flex gap-2" key={Math.random()}>
            <img
              className="w-[20px] h-[20px]"
              src={competition.league_logo}
              alt={competition.league_name}
            />
            <Link to={`/league/${competition.league_id}`}>
              {competition.league_name}
            </Link>
          </div>
        );
      })}
    </div>
  );
};

export default Competitions;
