import { SET_PARKS, SET_CAMPGROUNDS, SET_EVENTS, SET_VISITOR_CENTERS } from './constants';



const parseLatLong = (latLong) => {

  if (latLong !== "") {
    return {
      lat: parseFloat(latLong.split(',')[0].split(':')[1]),
      lng: parseFloat(latLong.split(',')[1].split(':')[1])
    }
  }

  return {lat: 39.270053,
          lng: -75.633259}
    ;

}

const reducer = (state, action, index) => {
  switch (action.type) {
    case SET_PARKS:
      console.log(action.parks);
      let newState = {...state};
      newState.parks = action.parks.map((park) => ({
        name: park.fullName,
        coordinates: parseLatLong(park.latLong),
        state: park.states,
        url: park.url,
        description: park.description,
        parkType: park.designation,
        images: [...park.images],
        parkCode: park.parkCode
      }));
      return newState;
    case SET_CAMPGROUNDS:
        let newStateCampgrounds = {...state};
        newStateCampgrounds.campgrounds = action.camps.map((campground) => ({
          name: campground.name,
          numCampSites: campground.campsites.totalsites,
          description: campground.description,
          toilets: campground.amenities.toilets,
          showers: campground.amenities.showers,
          parkCode: campground.parkCode
        }));
        return newStateCampgrounds;
    case SET_EVENTS:
      let newStateEvents = {...state};
      newStateEvents.events = action.events.map((event) => ({
        parkName: event.parkfullname,
        eventName: event.title,
        location: event.location,
        isFree: event.isfree,
        description: event.description,
        dates: [...event.dates],
        startTime: event.times[0].timestart,
        endTime: event.times[0].timeend,
      }));
      console.log(newStateEvents);
      return newStateEvents;
    case SET_VISITOR_CENTERS: 
    let newStateVisitorCenters = {...state};
        newStateVisitorCenters.visitorCenters = action.visitorCenters.map((center) => ({
        visitorCenterName: center.name,
        parkCode : center.parkCode,
        description: center.description,
        directions: center.directionsInfo
      }));
      console.log(newStateVisitorCenters);
      return newStateVisitorCenters;
    default:
      return state;
}
}

export default reducer;