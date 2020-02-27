import { SET_PARKS, SET_CAMPGROUNDS, SET_EVENTS, SET_VISITOR_CENTERS} from './constants';

export const setParks = (response) => ({type: SET_PARKS, parks: response.data})

export const setCampgrounds = (response) => ({type: SET_CAMPGROUNDS, camps: response.data})

export const setEvents = (response) => ({type: SET_EVENTS, events: response.data})

export const setVisitorCenters = (response) => ({type: SET_VISITOR_CENTERS, visitorCenters: response.data})