import React from 'react'
import "./Simulation.css"

function RunSimulationDialog ({ showStartIcon,clicked } : {showStartIcon:any,clicked:any}) {
  if(clicked){
    return null
  }
  return (
    <div className="dialog">
        <button onClick= {showStartIcon}>Run the Simulaion</button>
    </div>
  );
}


export default RunSimulationDialog