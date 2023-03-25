import React from "react";

export default function StartPoint({ showStartIcon,clicked } : {showStartIcon:any,clicked:any}) {
  if(clicked){
    return null
  }
  return (
    <div className="dialog part-2">
      <div className="dialog-header">
        <div className="">Pls adjust your camera before and then put the start point</div>
      </div>
      <div className="details">
        <button onClick= {showStartIcon}>Put the Point</button>
      </div>
    </div>
  );
}
