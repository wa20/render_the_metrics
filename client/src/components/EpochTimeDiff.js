import React from "react";
import { useEffect, useState } from "react";
import axios from "axios";

export default function EpochTimeDiff() {
  const [state, setState] = useState([]);

  useEffect(() => {
    const interval = setInterval(() => {
      axios
        .get("http://localhost:3500/time", {
          headers: { Authorization: "mysecrettoken" },
        })
        .then((res) => {
          let time = res.data.epoch;

          time = new Date(time);

          setState(time.toUTCString());
        })
        .catch((err) => {
          console.log(err);
        });
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="card text-center">
      <div className="card-header fw-bold">Time Stamp: 1 Sec Intervals</div>
      <div className="card-body">
        <pre className="blockquote mb-0">{state}</pre>
      </div>
    </div>
  );
}