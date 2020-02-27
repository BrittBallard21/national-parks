import React, { useState } from 'react';
import {Map, GoogleApiWrapper,Marker} from 'google-maps-react';
import { Switch, Route, Redirect } from 'react-router-dom';
import {useStateValue} from '../Context/Context';




const GoogleMap = (props) => {

    const [{parks}, dispatch] = useStateValue();
    const [isMarkerClicked, setIsMarkerClicked] = useState(false);

    const mapStyles = {
        width: '70%',
        height: '70%',
        marginLeft: '14%'
      };
    
    const onMarkerClickHandler = (parkName) => {
        props.setClickedPark(parkName);
        setIsMarkerClicked(true);
    }

    
    let markers = null;
    if(parks.length !== 0){
        markers = (
            <div>
                <Map
            google={props.google}
            zoom={4}
            style={mapStyles}
            initialCenter={{ lat: 39.5501, lng: -105.7821}}>
                {parks.map((park, index) =>  <Marker 
                onClick={(e) => onMarkerClickHandler(e.title)}
                title={park.name} 
                key={index} 
                id={index} 
                position={{lat: park.coordinates.lat , lng: park.coordinates.lng }}/>)}
            </Map>
            </div>
        )
    }
    console.log(parks);
  
    
    return (
        <div>
            {isMarkerClicked ? <Redirect to={`/park-information/${props.clickedPark}`}/> : markers}
        </div>
    );

}

export default GoogleApiWrapper({
    apiKey: 'AIzaSyDRrdEjbVKWHq84WmvIHROwdyHJyEVTpPw'
})(GoogleMap);