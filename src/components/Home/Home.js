
import React, { useEffect } from 'react';
import { useState } from 'react';
import FootballClub from '../FootballClub/FootballClub';

const Home = () => {
    const[teams, setTeams]= useState([]);
    useEffect(()=>{
        fetch(`https://www.thesportsdb.com/api/v1/json/1/search_all_teams.php?l=English%20Premier%20League`)
        .then(res => res.json())
        .then(data => setTeams(data.teams))
    },[])
   // console.log(teams);
  
    return (
       <div style={{backgroundColor:'darkslategray'}}>
           <div>
                <img style={{width:'100%',height:'400px'}} src="https://www.thesportsdb.com/images/media/league/fanart/xpqupt1455471848.jpg" alt=""/>
            </div>
            <div class='row'>        
            {
               teams && teams.map(team =><FootballClub team={team}></FootballClub>)
            }        
       </div>
       </div>
    );
};

export default Home;