import React from "react";
import axios from "axios";
import { useLayoutEffect, useState } from "react";

const EplModule = () => {
  const key = import.meta.env.VITE_API_KEY;
  const [todaysMatches, setTodaysMAtches] = useState([]);
  const [matchAvailability, setMatchAvailability] = useState(true);

  const formatDateToYYMMDD = () => {
    const currentDate = new Date();
    const year = currentDate.getFullYear().toString().slice(-2);
    const month = (currentDate.getMonth() + 1).toString().padStart(2, "0");
    const day = currentDate.getDate().toString().padStart(2, "0");

    const formattedDate = `${year}-${month}-${day}`;

    return formattedDate;
  };

  useLayoutEffect(() => {
    axios
      .get(
        `https://apiv3.apifootball.com/?action=get_events&from=${formatDateToYYMMDD()}&to=${formatDateToYYMMDD()}&league_id=152&APIkey=${key}`
      )
      .then((response) => {
        if (response.data.error) {
          setMatchAvailability(false);
          setTodaysMAtches(response.data);
        } else {
          setTodaysMAtches(response.data);
        }
        // console.log(response);
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  }, []);

  return (
    <div className="flex flex-col gap-2 m-2">
      <h1 className="text-2xl font-semibold">English premiere league</h1>
      {matchAvailability ? (
        todaysMatches?.map((match) => {
          return (
            <div className="flex justify-between" key={Math.random()}>
              <div className="flex gap-1">
                <img
                  src={match.team_home_badge}
                  alt={match.match_hometeam_name}
                  className="w-[30px] h-[30px]"
                />
                <p>{match.match_hometeam_name}</p>
              </div>
              <p className="font-semibold">VS</p>
              <div className="flex gap-1">
                <p>{match.match_awayteam_name}</p>
                <img
                  src={match.team_away_badge}
                  alt={match.match_awayteam_name}
                  className="w-[30px] h-[30px]"
                />
              </div>
            </div>
          );
        })
      ) : (
        <div>
          <p className="font-semibold text-md">No matches scheduled today!</p>
        </div>
      )}
    </div>
  );
};

export default EplModule;
