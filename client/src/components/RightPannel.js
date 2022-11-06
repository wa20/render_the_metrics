import React from "react";
import {useEffect, useState} from "react"
import axios from "axios"
import "./style.css";

export default function RightPanel() {

    const [state, setState] = useState([])


    useEffect(() => { 
      const interval = setInterval(() => { 

        axios.get("http://localhost:3500/metrics")
        .then((res) => {

          const metrics = res.data;
          setState(metrics)
  
          
        }).catch((err) => {
            console.log(err)
        });

      }, 30000)

      return () => clearInterval(interval);
    },[])

    
  return (
    <>
      <div className="py-5">
        <div className="black-board d-flex justify-content-center align-items-center">
          <pre>{state}</pre>
        </div>
      </div>
    </>
  );
}
