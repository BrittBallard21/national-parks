import React from 'react';
import {useStateValue} from '../Context/Context';


const Events = (props) => {

    const [{parks}, dispatch] = useStateValue();
    const [{events}, dispatchEvents] = useStateValue();
    
    let eventsForSelectedPark = [];
    if (events){
        eventsForSelectedPark = events.filter((event) => props.match.params.id == event.parkName);
    }
   
    let EventsContent = eventsForSelectedPark.map((event) =>{
        return(
            <>
            <h2 style={{color: "#DDDDDF"}}>{event.eventName}</h2>
            <h4>Location: {event.location}</h4>
            <h4>Date(s): {event.dates[0]}, {event.dates[1]}, {event.dates[2]}, {event.dates[3]}</h4>
            <h4>Time: {event.startTime} - {event.endTime}</h4>
            <h4>About the event: </h4>
            <h4>{event.description}</h4>
            <br></br>
            <br></br>
            </>
        )
    });

    if(eventsForSelectedPark.length === 0){
        EventsContent = (<h3>No Events Found</h3>)
    } 

    const STYLE = {
        marginLeft: "10%",
        marginRight: "10%"
    }

    return(
        <div style={STYLE}>
            <h1 style={{color: "#DDDDDF", textDecoration: "underline"}}>Events</h1>
            <div style={{color: "#DDDDDF", paddingTop:"2%"}}>
                {EventsContent}
            </div>
        </div>
    )

}

export default Events;