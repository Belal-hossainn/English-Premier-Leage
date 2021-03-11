import React, { useEffect, useState } from 'react';
import Team from '../Team/Team';

import './Home.css';

const Home = () => {
    const [teams, setTeams]= useState([]);
    
    useEffect(()=>{
        fetch('https://www.thesportsdb.com/api/v1/json/1/search_all_teams.php?l=English%20Premier%20League')
        .then(res => res.json())
        .then(data => setTeams(data.teams))
    }, [])
    console.log(teams);
    return (
        <div>
              <div className="banner">
              <h2>English Premier League</h2>
              </div>
            <div>
            {
               teams.map(team => <Team team={team}></Team>)
           }
            </div>
           
        </div>
    );
};

export default Home;