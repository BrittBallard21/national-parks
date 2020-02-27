const InitialState = {
    parks: [{
        name: "",
        coordinates: [],
        parkState: "",
        url: "",
        description: "",
        parkType: "",
        images: [{url: ""}],
        parkCode: ""
    }],
    campgrounds: [{
        name: "",
        numCampSites: "",
        description: "",
        toilets: "",
        showers:"",
        parkCode: ""
    }],
    events: [{
        parkName:"",
        eventName: "",
        location:"",
        isFree: "",
        description: "",
        dates: [],
        startTime: "",
        endTime: "",
    }],
    visitorCenters: [{
        visitorCenterName: "",
        parkCode : "",
        description: "",
        directions: "" 
    }]

};

export default InitialState;