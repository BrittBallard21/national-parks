import React, {useEffect} from 'react';

import {useStateValue} from '../Context/Context';
import {setParks,setCampgrounds,setEvents, setVisitorCenters} from '../Context/actions';
import Axios from 'axios';

const ParksData = () => {

    const [{parks}, dispatch] = useStateValue();
    const [{campgrounds}, dispatchCampgrounds] = useStateValue();
    const [{events}, dispatchEvents] = useStateValue();
    const [{visitorCenters}, dispatchVisitorCenters] = useStateValue();


    const getParks = async () => {
        const response = await Axios.get(`https://api.nps.gov/api/v1/parks?limit=600&q=national%20park&fields=images&api_key=aCydUg627NfE6OyGZeLqP9b0VBqeibQKkMsPXTkW`);
        dispatch(setParks(response.data));
    } 

    const getCamps = async () => {
        const response = await Axios.get(`https://developer.nps.gov/api/v1/campgrounds?api_key=aCydUg627NfE6OyGZeLqP9b0VBqeibQKkMsPXTkW`);
        dispatchCampgrounds(setCampgrounds(response.data));
    } 

    const getEvents = async () => {
        const response = await Axios.get(`https://developer.nps.gov/api/v1/events?api_key=aCydUg627NfE6OyGZeLqP9b0VBqeibQKkMsPXTkW`);
        dispatchEvents(setEvents(response.data));
        console.log(response.data);
    } 

    const getVisitorCenters = async () => {
        const response = await Axios.get(`https://developer.nps.gov/api/v1/visitorcenters?api_key=aCydUg627NfE6OyGZeLqP9b0VBqeibQKkMsPXTkW`);
        dispatchVisitorCenters(setVisitorCenters(response.data));
     
    } 

    useEffect(() => {
        getParks();
        getCamps();
        getEvents();
        getVisitorCenters();
    }, []);


    if(parks) {
        return (
            <h2>{parks.name}</h2>
        )
    }

    return null;

}
export default ParksData;