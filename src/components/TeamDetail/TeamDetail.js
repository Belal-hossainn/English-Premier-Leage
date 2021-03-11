import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import './TeamDetail.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {  faFlag, faMars, faVoteYea } from '@fortawesome/free-solid-svg-icons';
import malePic from '../../Photo/male.png';
import femalePic from '../../Photo/female.png';
import facbookIcon from '../Icon/Facebook.png';
import twitterIcon from '../Icon/Twitter.png';
import youtubeIcon from '../Icon/YouTube.png'


const TeamDetail = () => {
    const {teamId} = useParams();
    const [team, setTeam] = useState({})
    useEffect(()=>{
        const url = `https://www.thesportsdb.com/api/v1/json/1/lookupteam.php?id=${teamId}`;
        fetch(url)
        .then(res => res.json())
        .then(data => setTeam(data.teams[0]))
    }, [teamId])
    return (
        <div>
            <div className="banner">

            </div>
            <div className="team-container">
                <div className="team-detail">
                    <h2>{team.strTeam}</h2>

                    <p> <FontAwesomeIcon icon={faVoteYea} /> Founded: {team.intFormedYear}</p>
                    <p> <FontAwesomeIcon icon={faFlag} /> Country: {team.strCountry}</p>
                    <p> <FontAwesomeIcon icon={faMars} />  Gender: {team.strGender}</p>
                </div>
                <div>
                    {
                        team.strGender === 'male' ? <img src={femalePic} alt="" /> : <img src={malePic} alt="" />
                    }
                </div>
            </div>
            <div className="team-description">
                <p>{team.strDescriptionEN}</p>
            </div>
            <div className="social-media">
            <a href={`https://${team.strFacebook}`}><img src={facbookIcon} alt=""/></a>
            <a href={`https://${team.strTwitter}`}><img src={twitterIcon} alt=""/></a>
            <a href={`https://${team.strYoutube}`}><img src={youtubeIcon} alt=""/></a>
            </div>
        </div>

    );
};

export default TeamDetail;
