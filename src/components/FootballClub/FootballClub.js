import React from 'react';
import { Card, Button } from 'react-bootstrap';
import { useHistory } from 'react-router';
import './FootballClub.css'

const FootballClub = (props) => {
    //console.log(props.team);
    const {strTeam, strTeamBadge, idTeam} =props.team;
    const history = useHistory();
    const handClick= idTeam =>{
        history.push(`/footballClub/${idTeam}`)
    }
   
    return (
        <div className='footballClub'>
            
            <div class={'col-md-3'}>  
            <Card style={{ width: '12rem' }}>
                <Card.Img variant="top" src={strTeamBadge}/>
                <Card.Body>
                    <Card.Title>{strTeam}</Card.Title>
                    <Card.Text>
                         <p>Sports type: football</p>
                    </Card.Text>
                    <Button variant="primary" onClick={()=>handClick(idTeam)}>Explore</Button>
                </Card.Body>
            </Card>
            
         </div>
        
        </div>
          
        
    );
};

export default FootballClub;