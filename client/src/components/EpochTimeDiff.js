import React from "react";
import {useEffect, useState} from "react"




export default function EpochTimeDiff() {


const [state, setState] = useState([])





useEffect(() => { 
    const interval = setInterval(() => { 

      // Calcualte time difference

    }, 1000)

    return () => clearInterval(interval);
  },[])



  return (
    <div className="card">
      <div className="card-header">Time Stamp</div>
      <div className="card-body">
        {/* <blockquote > */}
          <pre className="blockquote mb-0">
            {state}
          </pre>
        {/* </blockquote> */}
      </div>
    </div>
  );
}
