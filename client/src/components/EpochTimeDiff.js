import React from "react";
import { useEffect, useState } from "react";
import axios from "axios";

export default function EpochTimeDiff() {
  const [state, setState] = useState([])
  const [difference, setDifference] = useState([]);



  useEffect(() => {
    const interval = setInterval(() => {
      axios
        .get("http://localhost:3500/time", {
          headers: { Authorization: "mysecrettoken" },
        })
        .then((res) => {
          let time = res.data.epoch;

          time = new Date(time);
          
          setState(time.getUTCSeconds());
        })        
        .catch((err) => {
          console.log(err);
        });
    }, 30000);

    return () => clearInterval(interval);
  }, []);


  useEffect(() => {
    const interval = setInterval(() => {
      axios
        .get("http://localhost:3500/time", {
          headers: { Authorization: "mysecrettoken" },
        })
        .then((res) => {
          let time = res.data.epoch;

          time = new Date(time);

          setDifference(time.getUTCSeconds());
          // setDifference(time);
        })        
        .catch((err) => {
          console.log(err);
        });
    }, 1000);

    return () => clearInterval(interval);
  }, []);


  return (
    <>
    
    <div className="card text-center">
      <div className="card-header fw-bold">Time Since Last Data Request:</div>
      <div className="card-body">
        <pre className="blockquote mb-0">{difference - state} sec</pre>
      </div>
    </div>
    
    </>
    
  );
}
