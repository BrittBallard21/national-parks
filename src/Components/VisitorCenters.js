import React from 'react';
import {useStateValue} from '../Context/Context';


const VisitorCenters = (props) => {

    const [{parks}, dispatch] = useStateValue();
    const [{visitorCenters}, dispatchVisitorCenters] = useStateValue();
    
    let visitorCenterParkCode;
    let visitorCenterForSelectedPark= [];
    if (visitorCenters){
       parks.map((park) => {
            if(props.match.params.id === park.name){
                return visitorCenterParkCode = park.parkCode
            }
        })
    
        visitorCenterForSelectedPark = visitorCenters.filter((center) => visitorCenterParkCode == center.parkCode);

    }

    let VisitorCentersContent =  visitorCenterForSelectedPark.map((center) =>{
        return(
            <>
                <h3>{center.visitorCenterName}</h3>
                <h4>Directions: </h4>
                <h4>{center.directions}</h4>
                <h4>About:</h4>
                <h4>{center.description}</h4>
            </>
        )
    });

    if(visitorCenterForSelectedPark.length === 0){
        VisitorCentersContent = (<h3>No Visitor Centers Found</h3>)
    } 

    const STYLE = {
        marginLeft: "10%",
        marginRight: "10%"
    }

    return(
        <div style={STYLE}>
            <h1 style={{color: "#DDDDDF", textDecoration: "underline"}}>Visitor Centers</h1>
            <div style={{color:"#DDDDDF", paddingTop:"2%"}}>
                {VisitorCentersContent}
            </div>
        </div>
    )

}

export default VisitorCenters;