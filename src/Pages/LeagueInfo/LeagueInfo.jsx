import React from "react";
import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const LeagueInfo = () => {
  const key = import.meta.env.VITE_API_KEY;
  const leagueId = useParams().leagueId;
  const [matches, setMatches] = useState([]);

  useEffect(() => {
    axios
      .get(
        `https://apiv3.apifootball.com/?action=get_events&from=2023-08-01&to=2024-08-01&league_id=${leagueId}&APIkey=${key}`
      )
      .then((response) => {
        setMatches(response.data);
        // console.log(response);
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  }, []);
  return (
    <div className="flex flex-col gap-5 m-2 lg:mx-60 min-h-screen">
      <h1 className="text-3xl font-bold">Matches</h1>
      {matches?.map((match) => {
        return (
          <React.Fragment key={Math.random()}>
            <span className="text-md font-semibold">
              <b>Date:</b> {match.match_date}
            </span>
            <div className="w-full flex justify-between p-2 lg:p-4 hover:bg-red-400 hover:animate-pulse">
              <div className="flex gap-2 items-center">
                <div className="flex gap-2 items-center">
                  <img
                    className="w-[30px] h-[30px]"
                    src={match.team_home_badge}
                    alt={match.match_hometeam_name}
                  />
                  <p className="text-sm lg:text-xl">
                    {match.match_hometeam_name}
                  </p>
                  <p className="text-md lg:text-2xl font-semibold">
                    {match.match_hometeam_ft_score}
                  </p>
                </div>
              </div>

              <div className="flex gap-2 items-center justify-end">
                <p className="text-md lg:text-2xl font-semibold">
                  {match.match_awayteam_ft_score}
                </p>

                <div className="flex gap-2 items-center">
                  <p className="text-sm lg:text-xl">
                    {match.match_awayteam_name}
                  </p>
                  <img
                    className="w-[30px] h-[30px]"
                    src={match.team_away_badge}
                    alt={match.match_awayteam_name}
                  />
                </div>
              </div>
            </div>
          </React.Fragment>
        );
      })}
    </div>
  );
};

export default LeagueInfo;
