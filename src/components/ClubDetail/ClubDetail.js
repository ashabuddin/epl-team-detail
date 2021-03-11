
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPodcast,faFutbol,faFlag,faMars } from '@fortawesome/free-solid-svg-icons'
import './ClubDetail.css'


const ClubDetail = () => {
    const {idTeam}=useParams();
    const[teams, setTeams] = useState({})

    useEffect(()=>{
        fetch(`https://www.thesportsdb.com/api/v1/json/1/lookupteam.php?id=${idTeam}`)
        .then(res=> res.json())
        .then(data=>setTeams(data.teams[0]))
    },[idTeam])
 const {strTeam, intFormedYear, strGender, strCountry, strTeamBanner,strStadiumDescription} =teams
   
   let image;
        if (strGender === 'Male') {
            image = <img style={{width:'400px'}} src="https://www.realmadrid.com/img/horizontal_620px/decimotecera-kiev-4.jpg" alt="male"/> 
        }
        else{
            image  = <img style={{width:'400px'}} src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQsSX4r04OZJ50EkGkGywDcYlHNozhYqyPu0w&usqp=CAU" alt="female"/>
        }

 return (

        <div style={{backgroundColor: 'slategray'}}>

            <div>
                <img style={{width:'100%'}} src={strTeamBanner} alt=""/>
            </div>
            <br/>  
            <div className='ClubDetailStyle'>
                 <div className='textStyle'>
                      <h1>{strTeam}</h1> 
                      <p><FontAwesomeIcon icon={faPodcast} /> Founded: {intFormedYear}</p>
                      <p><FontAwesomeIcon icon={faFlag} /> Country: {strCountry}</p>
                      <p><FontAwesomeIcon icon={faFutbol} /> Sports Type: Football</p> 
                      <p><FontAwesomeIcon icon={faMars} /> Gender: {strGender}</p>
                </div>
                <div className='imgStyle'>
                       {image}
                </div>
            </div>
            
            <div className='description'>
                <p>{strStadiumDescription}</p>
            </div>
            <div style={{display:'flex',justifyContent:'center'}}>
                <footer>
                    <a href="https://twitter.com/"><span> <img src="https://raw.githubusercontent.com/ProgrammingHero1/team-tracker/main/Icon/Twitter.png" alt=""/></span> </a>
                    <a href="https://www.facebook.com/"><span> <img src="https://raw.githubusercontent.com/ProgrammingHero1/team-tracker/main/Icon/Facebook.png" alt=""/></span></a>
                   <a href="https://www.youtube.com/"><span> <img src="https://raw.githubusercontent.com/ProgrammingHero1/team-tracker/main/Icon/YouTube.png" alt=""/> </span></a>      
                </footer>
            </div>                    
           
        </div>
    );
};

export default ClubDetail;