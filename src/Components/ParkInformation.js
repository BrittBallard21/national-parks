import React from 'react';
import {useStateValue} from '../Context/Context';
import {BrowserRouter as Router,Switch, Route, Redirect} from 'react-router-dom';
import Navbar from './Navbar';
import Campgrounds from './Campgrounds';
import GoogleMap from './GoogleMap';


const ParkInformation = (props) => {

    const [{parks}, dispatch] = useStateValue();
    console.log(props.match.params.id);
    let parkIndex;
    if (parks){
    parkIndex = parks.findIndex((parks) => props.match.params.id === parks.name)    
    }
    const STYLE = {
        fontFamily: "'Comic Sans MS', cursive, sans-serif",
        marginLeft: "10%",
        marginRight: "10%",
        color:"#DDDDDF"
    }

    const AboutPage = (
        <div>
            <h1 STYLE={{color:"#DDDDDF"}}>{parks[parkIndex].name}</h1>
            <p STYLE={{fontSize:"14px", color:"#DDDDDF"}}>Location: {parks[parkIndex].state}</p>
            <img src={parks[parkIndex].images[0].url} alt={parks[parkIndex].images[0].altText} width="40%"></img>
            <p STYLE={{fontSize:"22px", color:"#DDDDDF"}}>{parks[parkIndex].description}</p>
        </div>
    );

    return(
        <div style={STYLE}>
            {AboutPage}
        </div>
    )

}

export default ParkInformation;