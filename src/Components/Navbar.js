import React from 'react';
import { Link } from 'react-router-dom';

const Nav = ({clickedPark}) => (
    <div style={{fontSize: "17px",display: "flex",flexDirection: "row"}}>
        <div style={{paddingLeft: "10px"}}>
            <Link to={`/park-information/${clickedPark}`} style={{color:"#DDDDDF", textDecoration: "none"}}>About</Link>
        </div>
        <div style={{paddingLeft: "30px"}}>
            <Link to={`/park-information/${clickedPark}/campgrounds`} style={{color:"#DDDDDF", textDecoration: "none"}}>Campgrounds</Link>
        </div>
        <div style ={{paddingLeft:"30px"}}>
            <Link to={`/park-information/${clickedPark}/events`} style={{color:"#DDDDDF", textDecoration: "none"}}>Events</Link>
        </div>
        <div style ={{paddingLeft:"30px"}}>
            <Link to={`/park-information/${clickedPark}/visitor-info`} style={{color:"#DDDDDF", textDecoration: "none"}}>Visitor Center</Link>
        </div>
        <div style ={{paddingLeft:"30px"}}>
            <Link to={"/"} style={{color:"#DDDDDF",textDecoration: "none"}}>Parks Map</Link>
        </div>
      </div>
);

export default Nav;