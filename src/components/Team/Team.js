import React from 'react';
import './Team.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCoffee, faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';

const Team = (props) => {
    const {strTeam, strTeamBadge, idTeam} = props.team;
    return (
        <div>
            <div>
            
            </div>
            <div className="container">
                <div className="main-container">
                    <div className="team-card">
                        <img src={strTeamBadge} alt="" />
                        <h3> {strTeam}</h3>
                        <Link to={`/team/${idTeam}`}>  <button className="btn btn-primary">Explore <FontAwesomeIcon icon={faArrowRight} />  </button></Link>

                    </div>
                </div>
            </div>
        </div>
        
        );
};

export default Team;