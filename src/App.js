import React,{useState} from 'react';
import './App.css';
import { Switch, Route } from 'react-router-dom';
import GoogleMap from './Components/GoogleMap';
import InitalState from './Context/InitialState';
import Reducer from './Context/reducers';
import ParksApi from './Components/ParksData';

import {StateProvider} from './Context/Context';
import ParkInformation from './Components/ParkInformation';
import {BrowserRouter} from 'react-router-dom';
import Navbar from './Components/Navbar';
import Campgrounds from './Components/Campgrounds';
import Events from './Components/Events';
import VisitorCenters from './Components/VisitorCenters';


function App() {
  
  const [clickedPark, setClickedPark] = useState ("Acadia National Park");

  const Home = (
    <div >
        <h1 style={{color:"#DDDDDF"}}>United States National Parks</h1>
        <h3 style={{color:"#DDDDDF"}}>Explore the National Parks and learn about some of the greatest places to adventure.</h3>
        <GoogleMap clickedPark = {clickedPark} setClickedPark={setClickedPark}/>
    </div>
  )

  return (
    <StateProvider initialState={InitalState} reducer= {Reducer}>
      <div className="App">
        <ParksApi />
        <BrowserRouter>
        <Navbar  clickedPark={clickedPark} />
        <Switch>
            <Route exact path="/" render={() => Home}/>
            <Route exact path="/park-information/:id" render={(renderProps) => <ParkInformation {...renderProps} />} />
            <Route path="/park-information/:id/campgrounds" render={(renderProps) => <Campgrounds {...renderProps} />} />
            <Route path="/park-information/:id/events" render={(renderProps) => <Events {...renderProps} />} />
            <Route path="/park-information/:id/visitor-info" render={(renderProps) => <VisitorCenters {...renderProps} />} />
        </Switch>
        </BrowserRouter>
      </div>
    </StateProvider>
  );
}

export default App;
