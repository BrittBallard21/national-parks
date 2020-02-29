import React from 'react';
import {useStateValue} from '../Context/Context';


const Campgrounds = (props) => {

    const [{parks}, dispatch] = useStateValue();
    const [{campgrounds}, dispatchCampgrounds] = useStateValue();
  
    
    let campgroundsParkCode;
    let campgroundForSelectedPark= [];
    if (campgrounds){
       parks.map((park) => {
            if(props.match.params.id === park.name){
                return campgroundsParkCode = park.parkCode
            }
        })
    
        campgroundForSelectedPark = campgrounds.filter((campground) => campgroundsParkCode === campground.parkCode);

    }

    let CampgroundsContent = campgroundForSelectedPark.map((camp,index) =>{
        return(
            <>
                <h3>{camp.name}</h3>
                <h4>Number of Campsites: {camp.numCampSites}</h4>
                <h4>Toilets: {camp.toilets}</h4>
                <h4>Showers: {camp.showers}</h4>
                <h4>{camp.description}</h4>
                <br></br>
                <br></br>
            </>
        )
    });

    if(campgroundForSelectedPark.length === 0){
        CampgroundsContent = (<h3>No Campgrounds Found</h3>)
    } 

    const STYLE = {
        marginLeft: "10%",
        marginRight: "10%"
    }

    return(
        <div style={STYLE}>
            <h1 style={{color:"#DDDDDF", textDecoration: "underline"}}>Campgrounds</h1>
            <div style={{color:"#DDDDDF", paddingTop:"2%"}}>
                {CampgroundsContent}
            </div>
        </div>
    )

}

export default Campgrounds;