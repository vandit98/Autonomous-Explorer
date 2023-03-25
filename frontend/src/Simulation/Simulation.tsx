import React, { useEffect, useState } from 'react';
import mars_info from "./textures/mars_info.jpeg"

import { useLocation } from 'react-router-dom';
import RunSimulationDialog from './RunSimulationDialog';

import axios from 'axios';

function Simulation() {
    const location = useLocation()

    const [startShow, setStartShow] = useState(false);
    const [clicked,setClicked] = useState(false)

    
  useEffect(() => {
    const backgroundImage = location.state.additionalData;

    console.log(backgroundImage)

    document.body.style.backgroundImage = `url(${backgroundImage})`;
    document.body.style.backgroundRepeat = "no-repeat"
    document.body.style.backgroundSize = "cover"
}, []);

const showStartIcon = () =>{
  setStartShow(true)
   axios.get("http://127.0.0.1:8000/run_simulation")
}

  return (
    <div>
      <RunSimulationDialog showStartIcon={showStartIcon} clicked={clicked}/>
    </div>
  );
}

export default Simulation;
